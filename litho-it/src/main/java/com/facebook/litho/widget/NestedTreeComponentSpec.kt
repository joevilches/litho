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

package com.facebook.litho.widget

import com.facebook.litho.Component
import com.facebook.litho.ComponentContext
import com.facebook.litho.LifecycleStep
import com.facebook.litho.Row
import com.facebook.litho.annotations.LayoutSpec
import com.facebook.litho.annotations.OnCreateLayoutWithSizeSpec
import com.facebook.litho.annotations.OnCreateTreeProp
import com.facebook.litho.annotations.TreeProp
import com.facebook.yoga.YogaDirection

@LayoutSpec
object NestedTreeComponentSpec {

  @JvmStatic @OnCreateTreeProp fun onCreateTreeProp(c: ComponentContext): C = C()

  @JvmStatic
  @OnCreateLayoutWithSizeSpec
  fun onCreateLayout(
      c: ComponentContext,
      widthSpec: Int,
      heightSpec: Int,
      @TreeProp props: ExtraProps?
  ): Component {

    // Added to swallow the lint error.
    val s = String.format("w:%d,h:%d", widthSpec, heightSpec)
    if (props?.steps != null) {
      props.steps!!.add(LifecycleStep.ON_CREATE_LAYOUT_WITH_SIZE_SPEC)
    }
    val row =
        Row.create(c)
            .key("Row")
            .child(NestedTreeChildComponent.create(c).key("NestedTreeChildComponent"))
    if (props?.mDirection != null) {
      row.layoutDirection(props.mDirection)
    }
    return row.build()
  }

  class C

  class ExtraProps {
    @JvmField var steps: MutableList<LifecycleStep>? = null
    @JvmField var mDirection: YogaDirection? = null
  }
}
