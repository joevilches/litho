"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6039],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>s});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=o.createContext({}),s=function(e){return function(n){var t=m(n.components);return o.createElement(e,a({},n,{components:t}))}},m=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=m(e.components);return o.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),s=m(t),p=i,h=s["".concat(l,".").concat(p)]||s[p]||u[p]||a;return t?o.createElement(h,c(c({ref:n},d),{},{components:t})):o.createElement(h,c({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=h;var c={};for(var r in n)hasOwnProperty.call(n,r)&&(c[r]=n[r]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var d=2;d<a;d++)l[d]=t[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},97288:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var o=t(83117),i=t(80102),a=(t(67294),t(3905)),l=["components"],c={id:"lazycollections-sections-migration",title:"Sections Migration Guide"},r=void 0,d={unversionedId:"kotlin/lazycollections/lazycollections-sections-migration",id:"kotlin/lazycollections/lazycollections-sections-migration",title:"Sections Migration Guide",description:"This page provides guidance for migrating an existing list rendered with Sections to lazy collections. This will involve:",source:"@site/../docs/kotlin/lazycollections/lazycollections-sections-migration.mdx",sourceDirName:"kotlin/lazycollections",slug:"/kotlin/lazycollections/lazycollections-sections-migration",permalink:"/docs/kotlin/lazycollections/lazycollections-sections-migration",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/kotlin/lazycollections/lazycollections-sections-migration.mdx",tags:[],version:"current",frontMatter:{id:"lazycollections-sections-migration",title:"Sections Migration Guide"},sidebar:"mainSidebar",previous:{title:"Interactions",permalink:"/docs/kotlin/lazycollections/lazycollections-interactions"},next:{title:"Debugging Tips",permalink:"/docs/debugging/debugging-tips"}},s={},m=[{value:"Replace the <code>RecyclerCollectionComponent</code>",id:"replace-the-recyclercollectioncomponent",level:2},{value:"Migrating <code>GroupSectionSpec</code>",id:"migrating-groupsectionspec",level:2},{value:"Migrating <code>DataDiffSection</code>",id:"migrating-datadiffsection",level:2},{value:"Migrating Event Handlers",id:"migrating-event-handlers",level:2},{value:"Migrating Section State",id:"migrating-section-state",level:2}],p={toc:m};function u(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.mdx)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"This page provides guidance for migrating an existing list rendered with Sections to ",(0,a.mdx)("a",{parentName:"p",href:"/docs/kotlin/lazycollections/"},"lazy collections"),". This will involve:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Replacing the component that renders the section tree with a lazy collection component."),(0,a.mdx)("li",{parentName:"ol"},"Adding each component from the section tree as a child of the lazy collection."),(0,a.mdx)("li",{parentName:"ol"},"Migrating any event handlers or state.")),(0,a.mdx)("p",null,"Lazy Collections offer a cleaner API for building scrolling lists. Advantages over Sections include:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"No code generation."),(0,a.mdx)("li",{parentName:"ul"},"Simple inline declaration (similar to a Row/Column)."),(0,a.mdx)("li",{parentName:"ul"},"List items have direct access to the containing components props and state."),(0,a.mdx)("li",{parentName:"ul"},"Automatic diffing of content updates.")),(0,a.mdx)("h2",{id:"replace-the-recyclercollectioncomponent"},"Replace the ",(0,a.mdx)("inlineCode",{parentName:"h2"},"RecyclerCollectionComponent")),(0,a.mdx)("p",null,"Sections are typically rendered by a ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"val component = RecyclerCollectionComponent.create(c)\n  .section(...)\n  .build()\n")),(0,a.mdx)("p",null,"This should be replaced with a lazy collection component, for example ",(0,a.mdx)("inlineCode",{parentName:"p"},"LazyList"),". For information on migrating the ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent"),"'s configuration options, see the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/kotlin/lazycollections/lazycollections-layout"},"Layout and Styling")," page."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"val component = LazyList {\n  // Content will be added inline\n}\n")),(0,a.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"Lazy collections can only be used inside ",(0,a.mdx)("inlineCode",{parentName:"p"},"KComponent"),"s. If you are migrating a Spec component then first convert it to a ",(0,a.mdx)("inlineCode",{parentName:"p"},"KComponent")," or implement the lazy collection inside a ",(0,a.mdx)("inlineCode",{parentName:"p"},"KComponent")," container."))),(0,a.mdx)("p",null,"Next, you need to migrate the content from the Section into the lazy collection, as detailed below."),(0,a.mdx)("h2",{id:"migrating-groupsectionspec"},"Migrating ",(0,a.mdx)("inlineCode",{parentName:"h2"},"GroupSectionSpec")),(0,a.mdx)("p",null,"A ",(0,a.mdx)("inlineCode",{parentName:"p"},"GroupSectionSpec")," includes an ",(0,a.mdx)("inlineCode",{parentName:"p"},"onCreateChildren")," function that creates a list of ",(0,a.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"DataDiffSection")," children."),(0,a.mdx)("p",null,"The first step is to migrate each ",(0,a.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection"),". The following ",(0,a.mdx)("inlineCode",{parentName:"p"},"GroupSectionSpec")," renders two components as ",(0,a.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection"),"s:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/SimpleGroupSectionSpec.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/SimpleGroupSectionSpec.kt",start:"start_example",end:"end_example"},"@GroupSectionSpec\nobject SimpleGroupSectionSpec {\n\n  @OnCreateChildren\n  fun onCreateChildren(c: SectionContext, @Prop title: String): Children =\n      Children.create()\n          // highlight-start\n          .child(SingleComponentSection.create(c).component(Text.create(c).text(title).build()))\n          .child(SingleComponentSection.create(c).component(MyComponent()))\n          // highlight-end\n          .build()\n}\n")),(0,a.mdx)("p",null,"The component from each ",(0,a.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection")," should be added as a child to the lazy collection. Lazy collections supports ",(0,a.mdx)("inlineCode",{parentName:"p"},"KComponent")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"Spec")," children. ",(0,a.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection")," config options are available as parameters on child, such as ",(0,a.mdx)("inlineCode",{parentName:"p"},"isSticky"),"."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/collection/SectionsMigrations.kt start=start_simple_group end=end_simple_group",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/collection/SectionsMigrations.kt",start:"start_simple_group",end:"end_simple_group"},"class SimpleGroupMigration(private val title: String) : KComponent() {\n  override fun ComponentScope.render(): Component = LazyList {\n    // Add SingleComponentSection components as children:\n    child(Text(title))\n    child(MyComponent())\n  }\n}\n")),(0,a.mdx)("p",null,"Next, consider a list rendered with a ",(0,a.mdx)("inlineCode",{parentName:"p"},"DataDiffSection")),(0,a.mdx)("h2",{id:"migrating-datadiffsection"},"Migrating ",(0,a.mdx)("inlineCode",{parentName:"h2"},"DataDiffSection")),(0,a.mdx)("p",null,"A ",(0,a.mdx)("inlineCode",{parentName:"p"},"DataDiffSection")," defines how a list should be rendered. They can be defined as a child in a ",(0,a.mdx)("inlineCode",{parentName:"p"},"GroupSectionSpec"),", or directly on a ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent"),", and require the following event handlers:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"renderEventHandler")," - render a list item."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"onCheckIsSameItemEventHandler"),"  - Used to determine if items have the same identity."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"onCheckIsSameContentEventHandler")," - Used to determine if items have updated content.")),(0,a.mdx)("p",null,"Consider the following ",(0,a.mdx)("inlineCode",{parentName:"p"},"GroupSectionSpec")," that contains a ",(0,a.mdx)("inlineCode",{parentName:"p"},"DataDiffSection")," to render a list of the following type:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/ListSectionSpec.kt start=start_data_type end=end_data_type",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/ListSectionSpec.kt",start:"start_data_type",end:"end_data_type"},"class Model(val id: String, val field1: String, val field2: String)\n")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/ListSectionSpec.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/ListSectionSpec.kt",start:"start_example",end:"end_example"},'@GroupSectionSpec\nobject ListSectionSpec {\n\n  @OnCreateChildren\n  fun onCreateChildren(c: SectionContext, @Prop data: List<Model>): Children =\n      Children.create()\n          .child(\n              DataDiffSection.create<Model>(c)\n                  .data(data)\n                  .renderEventHandler(ListSection.onRenderItem(c))\n                  .onCheckIsSameItemEventHandler(ListSection.onCheckIsSameItem(c))\n                  .onCheckIsSameContentEventHandler(ListSection.onCheckIsSameContent(c)))\n          .build()\n\n  @OnEvent(RenderEvent::class)\n  fun onRenderItem(c: SectionContext, @FromEvent model: Model): RenderInfo =\n      ComponentRenderInfo.create()\n          // highlight-start\n          .component(Text.create(c).text("${model.field1} ${model.field2}").build())\n          // highlight-end\n          .build()\n\n  @OnEvent(OnCheckIsSameItemEvent::class)\n  fun onCheckIsSameItem(\n      c: SectionContext,\n      @FromEvent previousItem: Model,\n      @FromEvent nextItem: Model\n  ): Boolean =\n      // highlight-start\n      previousItem.id == nextItem.id\n  // highlight-end\n\n  @OnEvent(OnCheckIsSameContentEvent::class)\n  fun onCheckIsSameContent(\n      sectionContext: SectionContext,\n      @FromEvent previousItem: Model,\n      @FromEvent nextItem: Model\n  ): Boolean = previousItem.field1 == nextItem.field1 && previousItem.field2 == nextItem.field2\n}\n')),(0,a.mdx)("p",null,"A component for each list item should be added the lazy collection as a child. The component can be copied from the RenderEvent\u2019s ",(0,a.mdx)("inlineCode",{parentName:"p"},"ComponentRenderInfo")," ",(0,a.mdx)("inlineCode",{parentName:"p"},"component")," parameter."),(0,a.mdx)("p",null,"The child ",(0,a.mdx)("inlineCode",{parentName:"p"},"id")," parameter should be a unique and consistent across renders and will likely be the value that is compared in ",(0,a.mdx)("inlineCode",{parentName:"p"},"onCheckIsSameItem"),". See the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/kotlin/lazycollections/lazycollections-working-with-updates#child-identity"},"guidelines for child ids"),"."),(0,a.mdx)("p",null,"It is not necessary to migrate the checks from ",(0,a.mdx)("inlineCode",{parentName:"p"},"onCheckIsSameContent")," as the lazy collection will automatically compare the child component props. However, additional steps may be required to eliminate unnecessary layouts if child takes props that do not provide an ",(0,a.mdx)("inlineCode",{parentName:"p"},"equals()"),". For more information, see the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/kotlin/lazycollections/lazycollections-working-with-updates##avoiding-unecessary-layouts"},"Avoiding Unnecessary Layouts")," page."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/collection/SectionsMigrations.kt start=start_list end=end_list",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/collection/SectionsMigrations.kt",start:"start_list",end:"end_list"},'class ListMigration(private val data: List<Model>) : KComponent() {\n  override fun ComponentScope.render(): Component = LazyList {\n    // Add DataDiffSection contents as children with ids\n    children(items = data, id = { it.id }) { Text("${it.field1} ${it.field2}") }\n  }\n}\n')),(0,a.mdx)("h2",{id:"migrating-event-handlers"},"Migrating Event Handlers"),(0,a.mdx)("p",null,"Event handlers that are defined as ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnEvent")," function (such as visibility or click handling) can be passed as lambdas to the appropriate Style function. Note that using lambdas as props could cause ",(0,a.mdx)("a",{parentName:"p",href:"/docs/kotlin/lazycollections/lazycollections-working-with-updates#using-lambdas-as-props"},"unnecessary updates"),", so they should be wrapped in a ",(0,a.mdx)("inlineCode",{parentName:"p"},"useCallback")," hook."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/EventHandlerSectionSpec.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/EventHandlerSectionSpec.kt",start:"start_example",end:"end_example"},'@GroupSectionSpec\nobject EventHandlerSectionSpec {\n\n  @OnCreateChildren\n  fun onCreateChildren(c: SectionContext): Children =\n      Children.create()\n          .child(\n              SingleComponentSection.create(c)\n                  .component(\n                      Text.create(c)\n                          .text("Say Hello")\n                          .clickHandler(EventHandlerSection.onClick(c))\n                          .build()))\n          .build()\n\n  @OnEvent(ClickEvent::class)\n  fun onClick(c: SectionContext) {\n    println("Hello World!")\n  }\n}\n')),(0,a.mdx)("p",null,"Migrating the above Section to a lazy collection's yields:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/collection/SectionsMigrations.kt start=start_event_handler end=end_event_handler",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/collection/SectionsMigrations.kt",start:"start_event_handler",end:"end_event_handler"},'class EventHandlerMigration : KComponent() {\n  override fun ComponentScope.render(): Component {\n    val onClick = useCallback { _: ClickEvent -> println("Hello World!") }\n    return LazyList {\n      // Using Style.onClick(..)\n      child(Text("Say Hello", style = Style.onClick(action = onClick)))\n\n      // Or using the Spec api with eventHandler(..)\n      child(Text.create(context).text("Say Hello").clickHandler(eventHandler(onClick)).build())\n    }\n  }\n}\n')),(0,a.mdx)("h2",{id:"migrating-section-state"},"Migrating Section State"),(0,a.mdx)("p",null,"State managed by a ",(0,a.mdx)("inlineCode",{parentName:"p"},"Section")," should be moved into the component that manages the lazy collection. You may consider defining your lazy collection inside a dedicated ",(0,a.mdx)("inlineCode",{parentName:"p"},"KComponent")," so that it can maintain its own state."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/StateSectionSpec.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/StateSectionSpec.kt",start:"start_example",end:"end_example"},'@GroupSectionSpec\nobject StateSectionSpec {\n\n  @OnCreateInitialState\n  fun createInitialState(c: SectionContext, counter: StateValue<Int>) {\n    counter.set(0)\n  }\n\n  @OnCreateChildren\n  fun onCreateChildren(c: SectionContext, @State counter: Int): Children =\n      Children.create()\n          .child(\n              SingleComponentSection.create(c)\n                  .component(\n                      Text.create(c)\n                          .text("Increment: $counter")\n                          .clickHandler(StateSection.onClick(c))\n                          .build()))\n          .build()\n\n  @OnEvent(ClickEvent::class)\n  fun onClick(c: SectionContext) {\n    StateSection.incrementCounter(c)\n  }\n\n  @OnUpdateState\n  fun incrementCounter(counter: StateValue<Int>) {\n    counter.set((counter.get() ?: 0) + 1)\n  }\n}\n')),(0,a.mdx)("p",null,"Migrating the above Section to a lazy collections yields:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/collection/SectionsMigrations.kt start=start_state end=end_state",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/collection/SectionsMigrations.kt",start:"start_state",end:"end_state"},'class StateMigration : KComponent() {\n  override fun ComponentScope.render(): Component {\n    val counter = useState { 0 }\n    val onClick = useCallback { _: ClickEvent -> counter.update { it + 1 } }\n    return LazyList {\n      child(Text("Increment ${counter.value}", style = Style.onClick(action = onClick)))\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);