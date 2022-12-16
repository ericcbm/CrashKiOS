"use strict";(self.webpackChunktouchlab=self.webpackChunktouchlab||[]).push([[838],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(r),f=o,m=h["".concat(c,".").concat(f)]||h[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9068:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},i=void 0,l={unversionedId:"THE_PROBLEM",id:"THE_PROBLEM",title:"THE_PROBLEM",description:"The Problem",source:"@site/docs/THE_PROBLEM.md",sourceDirName:".",slug:"/THE_PROBLEM",permalink:"/THE_PROBLEM",draft:!1,editUrl:"https://github.com/touchlab/CrashKiOS/tree/main/website/docs/THE_PROBLEM.md",tags:[],version:"current",lastUpdatedBy:"Kevin Galligan",lastUpdatedAt:1671150184,formattedLastUpdatedAt:"Dec 16, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting Up CrashKiOS with Crashlytics",permalink:"/CrashlyticsTutorial"}},c={},s=[{value:"The Problem",id:"the-problem",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-problem"},"The Problem"),(0,o.kt)("p",null,"Crash reporter clients on iOS take the stack of active threads at the moment of crash. Kotlin on iOS, like Kotlin on the JVM, bubbles exceptions up until they are caught or reach the top of the call stack, at which point an unhandled exception hook is called. Because this differs from how iOS works, the crash report shows the point at which we call into Kotlin from Swift/Objc."),(0,o.kt)("img",{src:"/docimages/kotlinabort.png",alt:"Abort report",style:{zoom:"50%"}}),(0,o.kt)("p",null,"We want to get the caught exception and record that instead:"),(0,o.kt)("img",{src:"/docimages/kotlinlines.png",alt:"Abort report",style:{zoom:"67%"}}),(0,o.kt)("p",null,"That's what this library is for."))}u.isMDXComponent=!0}}]);