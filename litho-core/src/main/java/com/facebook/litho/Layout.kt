/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.facebook.litho

import android.content.Context
import android.content.pm.ApplicationInfo
import android.view.View
import com.facebook.litho.MeasureComparisonUtils.hasCompatibleSizeSpec
import com.facebook.litho.SizeSpec.getMode
import com.facebook.litho.SizeSpec.getSize
import com.facebook.rendercore.LayoutContext
import com.facebook.rendercore.utils.MeasureSpecUtils
import com.facebook.yoga.YogaConstants
import com.facebook.yoga.YogaNode

internal object Layout {

  @JvmStatic
  fun measureTree(
      lithoLayoutContext: LithoLayoutContext,
      androidContext: Context,
      node: LithoNode? = null,
      widthSpec: Int,
      heightSpec: Int,
      layoutStatePerfEvent: PerfEvent? = null,
  ): LithoLayoutResult? {
    if (node == null) {
      return null
    }

    layoutStatePerfEvent?.markerPoint("start_measure")

    val context: LayoutContext<LithoRenderContext> =
        LayoutContext(
            androidContext,
            LithoRenderContext(lithoLayoutContext),
            0,
            lithoLayoutContext.layoutCache,
            null)
    val result: LithoLayoutResult? = node.calculateLayout(context, widthSpec, heightSpec)

    layoutStatePerfEvent?.markerPoint("end_measure")
    return result
  }

  @JvmStatic
  fun measure(
      lithoLayoutContext: LithoLayoutContext,
      parentContext: ComponentContext,
      holder: NestedTreeHolderResult,
      widthSpec: Int,
      heightSpec: Int
  ): LithoLayoutResult? {
    val layout: LithoLayoutResult? =
        measureNestedTree(lithoLayoutContext, parentContext, holder, widthSpec, heightSpec)
    val currentLayout: LithoLayoutResult? = holder.nestedResult
    // Set new created LayoutResult for future access
    if (layout != null && layout !== currentLayout) {
      holder.nestedResult = layout
    }
    return layout
  }

  /**
   * In order to reuse render unit, we have to make sure layout data which render unit relies on is
   * determined before collecting layout results. So we're doing three things here:<br></br>
   * 1. Resolve NestedTree.<br></br>
   * 2. Measure Primitive that were skipped due to fixed size.<br></br>
   * 3. Invoke OnBoundsDefined for all MountSpecs.<br></br>
   */
  @JvmStatic
  fun measurePendingSubtrees(
      parentContext: ComponentContext,
      result: LithoLayoutResult,
      node: LithoNode,
      layoutState: LayoutState,
      lithoLayoutContext: LithoLayoutContext
  ) {
    if (lithoLayoutContext.isFutureReleased || result.measureHadExceptions) {
      // Exit early if the layout future as been released or if this result had exceptions.
      return
    }
    val component: Component = node.tailComponent
    val isTracing: Boolean = ComponentsSystrace.isTracing

    if (result is NestedTreeHolderResult) {
      // If the nested tree is defined, it has been resolved during a measure call during
      // layout calculation.
      if (isTracing) {
        ComponentsSystrace.beginSectionWithArgs("resolveNestedTree:${component.simpleName}")
            .arg("widthSpec", "EXACTLY ${result.getWidth()}")
            .arg("heightSpec", "EXACTLY ${result.getHeight()}")
            .arg("rootComponentId", node.tailComponent.id)
            .flush()
      }
      val size: Int = node.componentCount
      val immediateParentContext: ComponentContext =
          if (size == 1) {
            parentContext
          } else {
            node.getComponentContextAt(1)
          }
      val nestedTree: LithoLayoutResult? =
          measure(
              lithoLayoutContext = lithoLayoutContext,
              parentContext = immediateParentContext,
              holder = result,
              widthSpec = MeasureSpecUtils.exactly(result.getWidth()),
              heightSpec = MeasureSpecUtils.exactly(result.getHeight()))

      if (isTracing) {
        ComponentsSystrace.endSection()
      }

      if (nestedTree == null) {
        return
      }

      Resolver.collectOutputs(nestedTree.node)?.let { outputs ->
        val attachable: MutableList<Attachable> =
            layoutState.mAttachables
                ?: ArrayList<Attachable>(outputs.attachables.size).also {
                  layoutState.mAttachables = it
                }
        attachable.addAll(outputs.attachables)

        val transitions: MutableList<Transition> =
            layoutState.mTransitions
                ?: ArrayList<Transition>(outputs.transitions.size).also {
                  layoutState.mTransitions = it
                }
        transitions.addAll(outputs.transitions)

        val previousRenderData: MutableList<ScopedComponentInfo> =
            layoutState.mScopedComponentInfosNeedingPreviousRenderData
                ?: ArrayList<ScopedComponentInfo>(outputs.componentsThatNeedPreviousRenderData.size)
                    .also { layoutState.mScopedComponentInfosNeedingPreviousRenderData = it }
        previousRenderData.addAll(outputs.componentsThatNeedPreviousRenderData)
      }

      measurePendingSubtrees(
          parentContext = parentContext,
          result = nestedTree,
          node = nestedTree.node,
          layoutState = layoutState,
          lithoLayoutContext = lithoLayoutContext)
      return
    } else if (result.childrenCount > 0) {
      val context: ComponentContext = result.node.tailComponentContext
      for (i in 0 until result.childCount) {
        val child: LithoLayoutResult = result.getChildAt(i)
        measurePendingSubtrees(
            parentContext = context,
            result = child,
            node = child.node,
            layoutState = layoutState,
            lithoLayoutContext = lithoLayoutContext)
      }
    }

    result.onBoundsDefined()

    if (node.tailComponentContext.shouldReuseOutputs()) {
      registerWorkingRange(layoutState, result)
    }
  }

  /** Register working range for each node */
  @JvmStatic
  fun registerWorkingRange(layoutState: LayoutState, result: LithoLayoutResult) {
    val registrations: List<WorkingRangeContainer.Registration> =
        result.node.workingRangeRegistrations ?: return
    if (CollectionsUtils.isEmpty(registrations)) {
      return
    }

    val workingRange: WorkingRangeContainer =
        layoutState.mWorkingRangeContainer
            ?: WorkingRangeContainer().also { layoutState.mWorkingRangeContainer = it }
    val component: Component = result.node.tailComponent
    for (registration in registrations) {
      val interStagePropsContainer: InterStagePropsContainer? =
          if (component is SpecGeneratedComponent) {
            result.layoutData as InterStagePropsContainer?
          } else {
            null
          }
      workingRange.registerWorkingRange(
          registration.name,
          registration.workingRange,
          registration.scopedComponentInfo,
          interStagePropsContainer)
    }
  }

  @JvmStatic
  fun shouldComponentUpdate(layoutNode: LithoNode, diffNode: DiffNode? = null): Boolean {
    if (diffNode == null) {
      return true
    }
    val component: Component = layoutNode.tailComponent
    val scopedContext: ComponentContext = layoutNode.tailComponentContext

    // return true for primitives to exit early
    if (Component.isPrimitive(component)) {
      return true
    }

    try {
      return component.shouldComponentUpdate(
          getDiffNodeScopedContext(diffNode), diffNode.component, scopedContext, component)
    } catch (e: Exception) {
      ComponentUtils.handleWithHierarchy(scopedContext, component, e)
    }
    return true
  }

  @JvmStatic
  fun isLayoutDirectionRTL(context: Context): Boolean {
    val applicationInfo = context.applicationInfo
    if (applicationInfo.flags and ApplicationInfo.FLAG_SUPPORTS_RTL != 0) {
      val layoutDirection = getLayoutDirection(context)
      return layoutDirection == View.LAYOUT_DIRECTION_RTL
    }
    return false
  }

  private fun getLayoutDirection(context: Context): Int =
      context.resources.configuration.layoutDirection

  @JvmStatic
  fun setStyleWidthFromSpec(node: YogaNode, widthSpec: Int) {
    when (getMode(widthSpec)) {
      SizeSpec.UNSPECIFIED -> node.setWidth(YogaConstants.UNDEFINED)
      SizeSpec.AT_MOST -> node.setMaxWidth(getSize(widthSpec).toFloat())
      SizeSpec.EXACTLY -> node.setWidth(getSize(widthSpec).toFloat())
      else -> {}
    }
  }

  @JvmStatic
  fun setStyleHeightFromSpec(node: YogaNode, heightSpec: Int) {
    when (getMode(heightSpec)) {
      SizeSpec.UNSPECIFIED -> node.setHeight(YogaConstants.UNDEFINED)
      SizeSpec.AT_MOST -> node.setMaxHeight(getSize(heightSpec).toFloat())
      SizeSpec.EXACTLY -> node.setHeight(getSize(heightSpec).toFloat())
      else -> {}
    }
  }

  private fun measureNestedTree(
      lithoLayoutContext: LithoLayoutContext,
      parentContext: ComponentContext,
      holderResult: NestedTreeHolderResult,
      widthSpec: Int,
      heightSpec: Int
  ): LithoLayoutResult? {

    // 1. Check if current layout result is compatible with size spec and can be reused or not
    val currentLayout: LithoLayoutResult? = holderResult.nestedResult
    if (currentLayout != null &&
        hasCompatibleSizeSpec(
            currentLayout.widthSpec,
            currentLayout.heightSpec,
            widthSpec,
            heightSpec,
            currentLayout.width.toFloat(),
            currentLayout.height.toFloat())) {
      return currentLayout
    }

    // 2. Check if cached layout result is compatible and can be reused or not.
    val node: NestedTreeHolder = holderResult.node
    consumeAndGetCachedLayout(lithoLayoutContext, node, holderResult, widthSpec, heightSpec)?.let {
        cachedLayout ->
      return cachedLayout
    }

    // 3. If component is not using OnCreateLayoutWithSizeSpec, we don't have to resolve it again
    // and we can simply re-measure the tree. This is for cases where component was measured with
    // Component.measure API but we could not find the cached layout result or cached layout result
    // was not compatible with given size spec.
    val component: Component = node.tailComponent
    if (currentLayout != null && !Component.isLayoutSpecWithSizeSpec(component)) {
      return measureTree(
          lithoLayoutContext = lithoLayoutContext,
          androidContext = currentLayout.context.androidContext,
          node = currentLayout.node,
          widthSpec = widthSpec,
          heightSpec = heightSpec)
    }

    // 4. If current layout result is not available or component uses OnCreateLayoutWithSizeSpec
    // then resolve the tree and measure it. At this point we know that current layout result and
    // cached layout result are not available or are not compatible with given size spec.

    // NestedTree is used for two purposes i.e for components measured using Component.measure API
    // and for components which are OnCreateLayoutWithSizeSpec.
    // For components measured with measure API, we want to reuse the same global key calculated
    // during measure API call and for that we are using the cached node and accessing the global
    // key from it since NestedTreeHolder will have incorrect global key for it.
    val globalKeyToReuse: String
    val treePropsToReuse: TreeProps?
    if (Component.isLayoutSpecWithSizeSpec(component)) {
      globalKeyToReuse = node.tailComponentKey
      treePropsToReuse = node.tailComponentContext.treeProps
    } else {
      globalKeyToReuse = checkNotNull(node.cachedNode).tailComponentKey
      treePropsToReuse = checkNotNull(node.cachedNode).tailComponentContext.treeProps
    }

    // 4.a Apply state updates early for layout phase
    lithoLayoutContext.treeState.applyStateUpdatesEarly(parentContext, component, null, true)
    val prevContext = parentContext.calculationStateContext

    return try {
      val nestedRsc =
          ResolveContext(
              treeId = lithoLayoutContext.treeId,
              cache = lithoLayoutContext.cache,
              treeState = lithoLayoutContext.treeState,
              layoutVersion = lithoLayoutContext.layoutVersion,
              rootComponentId = lithoLayoutContext.rootComponentId,
              isAccessibilityEnabled = lithoLayoutContext.isAccessibilityEnabled,
              treeFuture = null,
              currentRoot = null,
              perfEventLogger = null,
              componentsLogger = null)
      parentContext.renderStateContext = nestedRsc

      // 4.b Create a new layout.
      val newNode: LithoNode? =
          Resolver.resolveImpl(
              nestedRsc,
              parentContext,
              widthSpec,
              heightSpec,
              component,
              true,
              globalKeyToReuse,
              treePropsToReuse)

      if (newNode == null) {
        if (parentContext.shouldCacheLayouts()) {
          // mark as error to prevent from resolving it again.
          holderResult.measureHadExceptions = true
        }
        return null
      }

      // TODO (T151239896): Revaluate copy into and freeze after common props are refactored
      holderResult.node.copyInto(newNode)
      newNode.applyParentDependentCommonProps(lithoLayoutContext)

      // If the resolved tree inherits the layout direction, then set it now.
      if (newNode.isLayoutDirectionInherit) {
        newNode.layoutDirection(holderResult.resolvedLayoutDirection)
      }

      val nestedLsc =
          LithoLayoutContext(
              treeId = nestedRsc.treeId,
              cache = nestedRsc.cache,
              rootContext = parentContext,
              treeState = nestedRsc.treeState,
              layoutVersion = nestedRsc.layoutVersion,
              rootComponentId = nestedRsc.rootComponentId,
              isAccessibilityEnabled = lithoLayoutContext.isAccessibilityEnabled,
              layoutCache = lithoLayoutContext.layoutCache,
              currentDiffTree = lithoLayoutContext.currentDiffTree,
              layoutStateFuture = null)

      // Set the DiffNode for the nested tree's result to consume during measurement.
      nestedLsc.setNestedTreeDiffNode(holderResult.diffNode)
      parentContext.setLithoLayoutContext(nestedLsc)

      // 4.b Measure the tree
      measureTree(
          lithoLayoutContext = nestedLsc,
          androidContext = parentContext.androidContext,
          node = newNode,
          widthSpec = widthSpec,
          heightSpec = heightSpec)
    } finally {
      parentContext.calculationStateContext = prevContext
    }
  }

  private fun consumeAndGetCachedLayout(
      lithoLayoutContext: LithoLayoutContext,
      holder: NestedTreeHolder,
      holderResult: NestedTreeHolderResult,
      widthSpec: Int,
      heightSpec: Int
  ): LithoLayoutResult? {
    val cachedNode: LithoNode = holder.cachedNode ?: return null
    val resultCache: MeasuredResultCache = lithoLayoutContext.cache
    val component: Component = holder.tailComponent
    val cachedLayout: LithoLayoutResult = resultCache.getCachedResult(cachedNode) ?: return null

    // Consume the cached result
    resultCache.removeCachedResult(cachedNode)
    val hasValidDirection: Boolean = hasValidLayoutDirectionInNestedTree(holderResult, cachedLayout)

    // Transfer the cached layout to the node it if it's compatible.
    if (hasValidDirection) {
      val hasCompatibleSizeSpec: Boolean =
          hasCompatibleSizeSpec(
              oldWidthSpec = cachedLayout.widthSpec,
              oldHeightSpec = cachedLayout.heightSpec,
              newWidthSpec = widthSpec,
              newHeightSpec = heightSpec,
              oldMeasuredWidth = cachedLayout.width.toFloat(),
              oldMeasuredHeight = cachedLayout.height.toFloat())
      if (hasCompatibleSizeSpec) {
        return cachedLayout
      } else if (!Component.isLayoutSpecWithSizeSpec(component)) {
        return measureTree(
            lithoLayoutContext = lithoLayoutContext,
            androidContext = cachedLayout.context.androidContext,
            node = cachedLayout.node,
            widthSpec = widthSpec,
            heightSpec = heightSpec)
      }
    }
    return null
  }

  /**
   * Check that the root of the nested tree we are going to use, has valid layout directions with
   * its main tree holder node.
   */
  private fun hasValidLayoutDirectionInNestedTree(
      holder: NestedTreeHolderResult,
      nestedTree: LithoLayoutResult
  ): Boolean =
      nestedTree.node.isLayoutDirectionInherit ||
          nestedTree.resolvedLayoutDirection == holder.resolvedLayoutDirection

  /** DiffNode state should be retrieved from the committed LayoutState. */
  private fun getDiffNodeScopedContext(diffNode: DiffNode): ComponentContext =
      diffNode.scopedComponentInfo.context
}
