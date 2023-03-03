"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5213],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>m,mdx:()=>C,useMDXComponents:()=>s,withMDXComponents:()=>d});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),d=function(e){return function(n){var t=s(n.components);return o.createElement(e,r({},n,{components:t}))}},s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},v=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||r;return t?o.createElement(u,c(c({ref:n},p),{},{components:t})):o.createElement(u,c({ref:n},p))}));function C(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=v;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<r;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}v.displayName="MDXCreateElement"},53903:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>s});var o=t(87462),a=t(63366),r=(t(67294),t(3905)),l=["components"],c={id:"events-for-specs",title:"Events for Specs"},i=void 0,p={unversionedId:"codegen/events-for-specs",id:"codegen/events-for-specs",title:"Events for Specs",description:"The framework provides a general-purpose API to connect components through events. Events are declared as a POJO (Plain Old Java Object) with an @Event annotation. By convention, Event class names are suffixed with Event.",source:"@site/../docs/codegen/events-for-specs.md",sourceDirName:"codegen",slug:"/codegen/events-for-specs",permalink:"/docs/codegen/events-for-specs",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/codegen/events-for-specs.md",tags:[],version:"current",frontMatter:{id:"events-for-specs",title:"Events for Specs"},sidebar:"mainSidebar",previous:{title:"State in Specs",permalink:"/docs/codegen/state-for-specs"},next:{title:"Triggering Events with Handles",permalink:"/docs/codegen/trigger-events"}},d={},s=[{value:"Callbacks",id:"callbacks",level:2}],m={toc:s},u="wrapper";function h(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.mdx)(u,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"The framework provides a general-purpose API to connect components through events. Events are declared as a POJO (Plain Old Java Object) with an ",(0,r.mdx)("inlineCode",{parentName:"p"},"@Event")," annotation. By convention, Event class names are suffixed with ",(0,r.mdx)("em",{parentName:"p"},"Event"),"."),(0,r.mdx)("p",null,"Event declarations may not be inner classes of a ",(0,r.mdx)("inlineCode",{parentName:"p"},"LayoutSpec")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"MountSpec"),". This is by design as specs are supposed to be a private concept and events can be used across multiple components."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"@Event\npublic class ColorChangedEvent {\n  public int color;\n}\n")),(0,r.mdx)("p",null,"In the following sample, it's assumed there is a component called ",(0,r.mdx)("inlineCode",{parentName:"p"},"ColorComponent"),". To indicate that a ",(0,r.mdx)("inlineCode",{parentName:"p"},"ColorComponent")," can dispatch a ",(0,r.mdx)("inlineCode",{parentName:"p"},"ColorChangedEvent"),", the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ColorComponentSpec")," must be annotated with that information. This is done with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"events")," parameter of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@MountSpec")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"@LayoutSpec")," annotations. A component may be annotated to dispatch multiple events."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"@LayoutSpec(events = { ColorChangedEvent.class })\nclass ColorComponentSpec {\n  ...\n  @OnCreateLayout\n  static Component onCreateLayout(\n      Context c,\n      @Prop int color) {\n    ...\n    EventHandler handler = ColorComponent.getColorChangedEventHandler(c);\n    if (handler != null) {\n      ColorComponent.dispatchColorChangedEvent(\n          handler,\n          color);\n    }\n    ...\n  }\n}\n")),(0,r.mdx)("p",null,"For an event of type ",(0,r.mdx)("inlineCode",{parentName:"p"},"FooEvent"),", this will auto-generate a matching ",(0,r.mdx)("inlineCode",{parentName:"p"},"dispatchFooEvent")," method and an event identifier that will used by event callbacks."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"dispatchFooEvent")," method takes an ",(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/EventHandler.html"},"EventHandler")," as the first argument followed by the list of attributes defined in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@Event")," class. An ",(0,r.mdx)("inlineCode",{parentName:"p"},"EventHandler")," is essentially a generic listener interface to connect components through events. The convention is to have an ",(0,r.mdx)("inlineCode",{parentName:"p"},"EventHandler")," prop for each event exposed by the component."),(0,r.mdx)("p",null,"In the example above, ",(0,r.mdx)("inlineCode",{parentName:"p"},"ColorComponent")," takes a ",(0,r.mdx)("inlineCode",{parentName:"p"},"colorChangedHandler")," as prop and dispatches the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ColorChangedEvent")," to it with the generated ",(0,r.mdx)("inlineCode",{parentName:"p"},"dispatchColorChangedEvent()")," method."),(0,r.mdx)("h2",{id:"callbacks"},"Callbacks"),(0,r.mdx)("p",null,"In order to handle events dispatched by other components, you'll need an ",(0,r.mdx)("inlineCode",{parentName:"p"},"EventHandler")," instance and a matching callback."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"EventHandler")," instances can be created by using the generated component's corresponding event handler factory method. This method will have the same name as the event callback method."),(0,r.mdx)("p",null,"The event callback can be defined using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnEvent")," annotation. ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnEvent")," takes one argument: the event class. The first parameter of a method annotated with ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnEvent")," has to be a ComponentContext that the framework will populate."),(0,r.mdx)("p",null,"For example, the following code shows how a component would define a handler for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ColorChangedEvent")," declared above:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'@LayoutSpec\nclass MyComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c,\n      @Prop String someColor) {\n\n    return Column.create(c)\n        ...\n        .child(\n            ColorComponent.create(c)\n                .color(someColor)\n                .colorChangedHandler(MyComponent.onColorChanged(c)))\n        ...\n        .build();\n\n  }\n\n  @OnEvent(ColorChangedEvent.class)\n  static void onColorChanged(\n      ComponentContext c,\n      @FromEvent int color,\n      @Prop String someProp) {\n    Log.d("MyComponent", "Color changed: " + color);\n  }\n}\n')),(0,r.mdx)("p",null,"By using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@Param")," annotation on one or more of the parameters of the callback method, dynamic event parameters can be defined. This is useful for defining a callback for a certain type of event (such as ",(0,r.mdx)("inlineCode",{parentName:"p"},"onAvatarClicked()"),") where there is a need to know which avatar was clicked. The avatar parameter in this case would be passed to the event handler factory method."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"@OnEvent")," callbacks have access to all component props just like the other spec methods:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'@LayoutSpec\nclass FacePileComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c,\n      @Prop Uri[] faces) {\n    Component.Builder builder = Column.create(c);\n    for (Uri face : faces) {\n      builder.child(\n          FrescoImage.create(c)\n              .uri(face)\n              .clickHandler(FacePileComponent.onFaceClicked(c, face)));\n    }\n\n    return builder.build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onFaceClicked(\n      ComponentContext c,\n      @Param Uri face) {\n    Log.d("FacePileComponent", "Face clicked: " + face);\n  }\n}\n')))}h.isMDXComponent=!0}}]);