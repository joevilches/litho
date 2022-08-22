"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9987],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>p,withMDXComponents:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),m=function(e){return function(t){var n=p(t.components);return a.createElement(e,i({},t,{components:n}))}},p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,h=m["".concat(r,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},33655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=n(44996),s=["components"],l={id:"adding-state",title:"Adding State"},d=void 0,m={unversionedId:"tutorial/adding-state",id:"tutorial/adding-state",title:"Adding State",description:"In this section of the tutorial, you'll learn about useState, one of Litho's Hooks.",source:"@site/../docs/tutorial/adding-state.md",sourceDirName:"tutorial",slug:"/tutorial/adding-state",permalink:"/docs/tutorial/adding-state",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/tutorial/adding-state.md",tags:[],version:"current",frontMatter:{id:"adding-state",title:"Adding State"},sidebar:"mainSidebar",previous:{title:"Introducing Layout",permalink:"/docs/tutorial/introducing-layout"},next:{title:"Building Lists",permalink:"/docs/tutorial/building-lists"}},p={},u=[{value:"What you&#39;ve built so far",id:"what-youve-built-so-far",level:2},{value:"Using useState to &#39;Like&#39; the post",id:"using-usestate-to-like-the-post",level:2},{value:"Managing useState",id:"managing-usestate",level:3},{value:"Key Points",id:"key-points",level:3},{value:"What next?",id:"what-next",level:2}],c={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.mdx)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"In this section of the tutorial, you'll learn about ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/use-state"},"useState"),", one of Litho's ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/hooks-intro"},"Hooks"),"."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"useState")," enables a component to persist and update a single value across 'renders'."),(0,i.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Here, rendering refers to building the layout of the component on which the 'render' was invoked. To 'render' is to build the layout. It does not render anything on the display of the device (no Views are created)."))),(0,i.mdx)("h2",{id:"what-youve-built-so-far"},"What you've built so far"),(0,i.mdx)("p",null,"The following code shows your first Litho component from the previous section of the tutorial (see the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/tutorial/introducing-layout"},"Introducing Layout")," page):"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/PostStyledKComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/PostStyledKComponent.kt",start:"start_example",end:"end_example"},"class PostStyledKComponent(val post: Post) : KComponent() {\n  override fun ComponentScope.render(): Component {\n    return Column {\n      child(\n          Row(alignItems = YogaAlign.CENTER, style = Style.padding(all = 8.dp)) {\n            child(\n                Image(\n                    drawable = drawableRes(post.user.avatarRes),\n                    style = Style.width(36.dp).height(36.dp).margin(start = 4.dp, end = 8.dp)))\n            child(Text(text = post.user.username, textStyle = Typeface.BOLD))\n          })\n      child(\n          Image(\n              drawable = drawableRes(post.imageRes),\n              scaleType = ImageView.ScaleType.CENTER_CROP,\n              style = Style.aspectRatio(1f)))\n    }\n  }\n}\n")),(0,i.mdx)("h2",{id:"using-usestate-to-like-the-post"},"Using useState to 'Like' the post"),(0,i.mdx)("p",null,"The next step is to enhance the code by giving the user the ability to 'like' the post."),(0,i.mdx)("p",null,"For this, you need to declare a component State using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"useState")," hook (you need to declare an initial value):"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/PostWithActionsKComponent.kt start=start_state_hook end=end_state_hook",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/PostWithActionsKComponent.kt",start:"start_state_hook",end:"end_state_hook"},"val isLiked = useState { false }\n")),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},(0,i.mdx)("inlineCode",{parentName:"p"},"useState")," can be only used in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"render()")," function"))),(0,i.mdx)("h3",{id:"managing-usestate"},"Managing useState"),(0,i.mdx)("p",null,"You can use the val ",(0,i.mdx)("inlineCode",{parentName:"p"},"isLiked")," for the following:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"To access the state, use ",(0,i.mdx)("inlineCode",{parentName:"p"},"isLiked.value"),".")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"To update the state, use a lambda variant: ",(0,i.mdx)("inlineCode",{parentName:"p"},"isLiked.update { isLiked -> !isLiked }"),". See the following code for an example of how to update the state."),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"To learn more about the update options, see the ",(0,i.mdx)("a",{parentName:"li",href:"/docs/mainconcepts/use-state#value-vs-lambda-variants"},"useState")," page in the 'Main Concepts' section.")))),(0,i.mdx)("p",null,"The following code uses a click (.onClick) on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Image")," component to update the state:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/PostWithActionsKComponent.kt start=start_image_button end=end_image_button",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/PostWithActionsKComponent.kt",start:"start_image_button",end:"end_image_button"},"Image(\n    drawable =\n        drawableRes(\n            if (isLiked.value) R.drawable.ic_baseline_favorite_24\n            else R.drawable.ic_baseline_favorite_border_24),\n    style =\n        Style.width(32.dp).height(32.dp).margin(all = 6.dp).onClick {\n          isLiked.update { isLiked -> !isLiked }\n        })\n")),(0,i.mdx)("p",null,"You can see the implemented behaviour in the video clip below. Notice how the heart icon changes on each click, which matches the state as it switches between false and true."),(0,i.mdx)("video",{loop:"true",autoplay:"true",class:"video",width:"100%",height:"500px",muted:"true"},(0,i.mdx)("source",{type:"video/webm",src:(0,r.default)("/videos/useState-tutorial.mov")}),(0,i.mdx)("p",null,"Your browser does not support the video element.")),(0,i.mdx)("h3",{id:"key-points"},"Key Points"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"useState")," - a Hook that enables a component to persist and update a single value across renders."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"render()")," - you can use useState Hook only in the ",(0,i.mdx)("inlineCode",{parentName:"li"},"render()")," function.")),(0,i.mdx)("h2",{id:"what-next"},"What next?"),(0,i.mdx)("p",null,"You now have a component that is formatted with a Flexbox style and gives the user the ability to express a 'like'."),(0,i.mdx)("p",null,"In the next section of the tutorial, ",(0,i.mdx)("a",{parentName:"p",href:"/docs/tutorial/building-lists"},"Building Lists"),", you'll learn how to build lists in Litho with the Sections API."))}h.isMDXComponent=!0}}]);