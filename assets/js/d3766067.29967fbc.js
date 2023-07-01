"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3666],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,d=u["".concat(p,".").concat(m)]||u[m]||b[m]||o;return r?a.createElement(d,s(s({ref:t},c),{},{components:r})):a.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96264:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(25773),n=(r(27378),r(35318));const o={},s="Observables",i={unversionedId:"api/observables/index",id:"api/observables/index",title:"Observables",description:"The @devicescript/observables builtin module provides a lightweight reactive observable framework, a limited subset of RxJS.",source:"@site/docs/api/observables/index.mdx",sourceDirName:"api/observables",slug:"/api/observables/",permalink:"/devicescript/api/observables/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Water Level",permalink:"/devicescript/api/servers/waterlevel"},next:{title:"Creation Operators",permalink:"/devicescript/api/observables/creation"}},p={},l=[{value:"Setup",id:"setup",level:2},{value:"Operators",id:"operators",level:2}],c={toc:l},u="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"observables"},"Observables"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"@devicescript/observables")," ",(0,n.kt)("a",{parentName:"p",href:"/developer/packages"},"builtin")," module provides a lightweight reactive observable framework, a limited subset of ",(0,n.kt)("a",{parentName:"p",href:"https://rxjs.dev"},"RxJS"),".\nWe highly recommend reviewing the RxJS documentation for deeper discussions about observables."),(0,n.kt)("p",null,"For in-depth tutorials about observables, see ",(0,n.kt)("a",{parentName:"p",href:"https://rxjs.dev/"},"RxJS"),"."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("p",null,"Import ",(0,n.kt)("inlineCode",{parentName:"p"},"@devicescript/observables")," to enable the APIs."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import "@devicescript/observables"\n')),(0,n.kt)("h2",{id:"operators"},"Operators"),(0,n.kt)("p",null,"Observable operators apply transformation between observable data stream. They can be combined using the ",(0,n.kt)("inlineCode",{parentName:"p"},"pipe"),"\nmethod to create complex data processing pipeline. Many (most) operators are adapted from ",(0,n.kt)("a",{parentName:"p",href:"https://rxjs.dev/guide/operators"},"Rxjs"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { Temperature } from "@devicescript/core"\nimport { threshold, throttleTime } from "@devicescript/observables"\n\nconst thermometer = new Temperature()\n// create a stream of temperature readings\nconst temperature = thermometer.reading.pipe(\n    threshold(0.1), // at least 0.1deg change\n    throttleTime(10000) // at most one update per 10s\n)\ntemperature.subscribe(t => console.log(t))\n')))}b.isMDXComponent=!0}}]);