"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[813],{7772:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(83117),i=n(67294),o=n(23746),d=n(7694),m=n(13618),r="0.41.2",l="0.41.3-SNAPSHOT",p="0.10.4",s="0.46.0",x=n(86668);const c=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,r).replace(/{{site.soloaderVersion}}/g,p).replace(/{{site.lithoSnapshotVersion}}/g,l).replace(/{{site.flipperVersion}}/g,s).trim(),c=(0,x.L)().isDarkTheme?m.Z:d.Z;return i.createElement(o.ZP,(0,a.Z)({},o.lG,{code:n,language:t,theme:c}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,d=e.getTokenProps;return i.createElement("pre",{className:t,style:n},a.map((function(e,t){return i.createElement("div",o({line:e,key:t}),e.map((function(e,t){return i.createElement("span",d({token:e,key:t}))})))})))}))}},74817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>p,metadata:()=>x,toc:()=>g});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),d=n(65488),m=n(85162),r=n(44996),l=(n(7772),["components"]),p={id:"kotlin-flexbox-containers",title:"Flexbox Containers"},s=void 0,x={unversionedId:"kotlin/kotlin-flexbox-containers",id:"kotlin/kotlin-flexbox-containers",title:"Flexbox Containers",description:"This page covers how to convert existing code from the Java Spec API to the Kotlin API.",source:"@site/../docs/kotlin/flexbox-containers.mdx",sourceDirName:"kotlin",slug:"/kotlin/kotlin-flexbox-containers",permalink:"/docs/kotlin/kotlin-flexbox-containers",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/kotlin/flexbox-containers.mdx",tags:[],version:"current",frontMatter:{id:"kotlin-flexbox-containers",title:"Flexbox Containers"},sidebar:"mainSidebar",previous:{title:"Introducing Hooks for State",permalink:"/docs/kotlin/hooks-for-spec-developers"},next:{title:"Event Handling",permalink:"/docs/kotlin/event-handling"}},c={},g=[{value:"Rows and Columns, Revisited",id:"rows-and-columns-revisited",level:2},{value:"Differences between the KComponent API and the Spec API",id:"differences-between-the-kcomponent-api-and-the-spec-api",level:3},{value:"Migrating from the Spec API",id:"migrating-from-the-spec-api",level:2},{value:"Flexbox Properties Cheatsheet",id:"flexbox-properties-cheatsheet",level:3},{value:"Example Migration",id:"example-migration",level:3}],N={toc:g};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.mdx)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"This page covers how to convert existing code from the Java Spec API to the Kotlin API."),(0,o.mdx)("p",{parentName:"div"},"For the main Layout spec information, refer to the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/flexbox-yoga"},"Layout System with Flexbox")," page."))),(0,o.mdx)("h2",{id:"rows-and-columns-revisited"},"Rows and Columns, Revisited"),(0,o.mdx)("p",null,"As with the Spec API, ",(0,o.mdx)("inlineCode",{parentName:"p"},"Row")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"Column")," are the primary layout containers used in the KComponent API."),(0,o.mdx)("img",{src:(0,r.default)("/images/litho-layout-row-column-simple.png")}),(0,o.mdx)("h3",{id:"differences-between-the-kcomponent-api-and-the-spec-api"},"Differences between the KComponent API and the Spec API"),(0,o.mdx)("p",null,"If you're used to the Spec way of writing containers, there are a few important differences when using ",(0,o.mdx)("inlineCode",{parentName:"p"},"Row")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"Column")," in the KComponent API:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"Props of Rows and Columns")," - props that configure the ",(0,o.mdx)("inlineCode",{parentName:"li"},"Row"),"/",(0,o.mdx)("inlineCode",{parentName:"li"},"Column")," itself, like ",(0,o.mdx)("inlineCode",{parentName:"li"},"alignItems")," or ",(0,o.mdx)("inlineCode",{parentName:"li"},"justifyContent"),", now appear as props directly on the container Component. In this way, there is no difference from setting props on any other component."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"Common Props")," - props that configure a particular child's positioning within the context of a ",(0,o.mdx)("inlineCode",{parentName:"li"},"Row"),"/",(0,o.mdx)("inlineCode",{parentName:"li"},"Column"),", like ",(0,o.mdx)("inlineCode",{parentName:"li"},"alignSelf")," or ",(0,o.mdx)("inlineCode",{parentName:"li"},"flex"),", now appear with other ",(0,o.mdx)("a",{parentName:"li",href:"/docs/kotlin/kotlin-api-basics#common-props"},"common props")," on the ",(0,o.mdx)("inlineCode",{parentName:"li"},"Style")," passed to that child. You can think of this as akin to ",(0,o.mdx)("inlineCode",{parentName:"li"},"LayoutParams")," in vanilla Android in that they must be able to go on any component and are read by the parent."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"Children")," - children are added within a trailing lambda using the ",(0,o.mdx)("inlineCode",{parentName:"li"},"child()")," call.")),(0,o.mdx)("p",null,"You can see this in practice in the following code:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin"},' Column(style = Style.padding(all = 8.dp), alignItems = YogaAlign.CENTER) {\n   child(Text(style = Style.flex(grow = 1f), text = "Foo"))\n   child(Text(text = "Bar"))\n }\n')),(0,o.mdx)("h2",{id:"migrating-from-the-spec-api"},"Migrating from the Spec API"),(0,o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Why are Layout Props Now Defined in Two Different Ways?")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"Without code-generated builders, Bloks had to make a distinction between props of the container itself and common props that can be set on children of the container."),(0,o.mdx)("p",{parentName:"div"},"For example, ",(0,o.mdx)("inlineCode",{parentName:"p"},"alignItems")," configures the default alignment for children in this container and is only valid on a flexbox container. It's set like a normal component prop on ",(0,o.mdx)("inlineCode",{parentName:"p"},"Row"),"/",(0,o.mdx)("inlineCode",{parentName:"p"},"Column"),"."),(0,o.mdx)("p",{parentName:"div"},"On the other hand, ",(0,o.mdx)("inlineCode",{parentName:"p"},"alignSelf")," can be respected on any child of a container, whether it's a Text, a Switch, or some custom Component: it's therefore exposed as a common prop via ",(0,o.mdx)("inlineCode",{parentName:"p"},"Style"),"."),(0,o.mdx)("p",{parentName:"div"},"The benefit of this is that you can now statically verify all required props are set instead of verifying at runtime (as well as not rely on Codegen!)."))),(0,o.mdx)("h3",{id:"flexbox-properties-cheatsheet"},"Flexbox Properties Cheatsheet"),(0,o.mdx)("p",null,"The following table helps you to identify whether to set a layout property directly on the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Row"),"/",(0,o.mdx)("inlineCode",{parentName:"p"},"Column")," or on the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Style"),":"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:"left"},"Flexbox Property"),(0,o.mdx)("th",{parentName:"tr",align:"center"},"Configures a Specific Child?"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"Example KComponent Usage"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"alignContent")),(0,o.mdx)("td",{parentName:"tr",align:"center"},"No"),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"Row(alignContent = YogaAlign.CENTER)"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"alignItems")),(0,o.mdx)("td",{parentName:"tr",align:"center"},"No"),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"Row(alignItems = YogaAlign.CENTER)"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"alignSelf")),(0,o.mdx)("td",{parentName:"tr",align:"center"},"Yes"),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"Style.alignSelf(YogaAlign.CENTER)"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"height")),(0,o.mdx)("td",{parentName:"tr",align:"center"},"Yes"),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"Style.height(50.dp)"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"flexBasis")),(0,o.mdx)("td",{parentName:"tr",align:"center"},"Yes"),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"Style.flex(basis = 8.dp)"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"flexBasisPercent")),(0,o.mdx)("td",{parentName:"tr",align:"center"},"Yes"),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"Style.flex(basisPercent = 25f)"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"flexGrow")),(0,o.mdx)("td",{parentName:"tr",align:"center"},"Yes"),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"Style.flex(grow = 1f)"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"flexShrink")),(0,o.mdx)("td",{parentName:"tr",align:"center"},"Yes"),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"Style.flex(shrink = 1f)"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"justifyContent")),(0,o.mdx)("td",{parentName:"tr",align:"center"},"No"),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"Row(justifyContent = YogaJustify.CENTER)"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"margin")),(0,o.mdx)("td",{parentName:"tr",align:"center"},"Yes"),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"Style.margin(8.dp)"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"padding")),(0,o.mdx)("td",{parentName:"tr",align:"center"},"Yes"),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"Style.padding(8.dp)"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"width")),(0,o.mdx)("td",{parentName:"tr",align:"center"},"Yes"),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"Style.width(50.dp)"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"wrap")),(0,o.mdx)("td",{parentName:"tr",align:"center"},"No"),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"Row(wrap = YogaWrap.NO_WRAP)"))))),(0,o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"A property is set via ",(0,o.mdx)("inlineCode",{parentName:"p"},"Style")," if and only if it configures a specific child!"))),(0,o.mdx)("h3",{id:"example-migration"},"Example Migration"),(0,o.mdx)("p",null,"Below is an example of a simple ",(0,o.mdx)("inlineCode",{parentName:"p"},"Component")," using various layout properties, converted to an equivalent KComponent:"),(0,o.mdx)(d.default,{groupId:"flexbox",defaultValue:"kotlin_flexbox",values:[{label:"Kotlin",value:"kotlin_flexbox"},{label:"Java",value:"java_flexbox"}],mdxType:"Tabs"},(0,o.mdx)(m.default,{value:"kotlin_flexbox",mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/FlexboxComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/FlexboxComponent.kt",start:"start_example",end:"end_example"},"class FlexboxComponent(\n    private val username: String,\n    @DrawableRes private val avatarRes: Int,\n    @DrawableRes private val imageRes: Int\n) : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    return Column {\n      child(\n          Row(alignItems = YogaAlign.CENTER, style = Style.padding(all = 8.dp)) {\n            child(\n                Image(\n                    drawable = drawableRes(avatarRes),\n                    style = Style.width(36.dp).height(36.dp).margin(start = 4.dp, end = 8.dp)))\n            child(Text(text = username, textStyle = Typeface.BOLD))\n          })\n      child(\n          Image(\n              drawable = drawableRes(imageRes),\n              scaleType = ImageView.ScaleType.CENTER_CROP,\n              style = Style.aspectRatio(1f)))\n    }\n  }\n}\n"))),(0,o.mdx)(m.default,{value:"java_flexbox",mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/onboarding/JavaApiComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/java/onboarding/JavaApiComponentSpec.java",start:"start_example",end:"end_example"},"@LayoutSpec\npublic class JavaApiComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c, @Prop String username, @Prop int avatarRes, @Prop int imageRes) {\n    return Column.create(c)\n        .child(\n            Row.create(c)\n                .paddingDip(YogaEdge.ALL, 8)\n                .alignItems(YogaAlign.CENTER)\n                .child(\n                    Image.create(c)\n                        .drawableRes(avatarRes)\n                        .widthDip(36)\n                        .heightDip(36)\n                        .marginDip(YogaEdge.START, 4)\n                        .marginDip(YogaEdge.END, 8))\n                .child(Text.create(c).text(username).textStyle(Typeface.BOLD)))\n        .child(\n            Image.create(c)\n                .drawableRes(imageRes)\n                .scaleType(ImageView.ScaleType.CENTER_CROP)\n                .aspectRatio(1))\n        .build();\n  }\n}\n")))))}h.isMDXComponent=!0}}]);