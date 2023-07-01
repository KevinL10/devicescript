"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8802],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(25773),a=(r(27378),r(35318));const i={pagination_prev:null,pagination_next:null,description:"DeviceScript client for HID Keyboard service"},o="HidKeyboard",c={unversionedId:"api/clients/hidkeyboard",id:"api/clients/hidkeyboard",title:"HidKeyboard",description:"DeviceScript client for HID Keyboard service",source:"@site/docs/api/clients/hidkeyboard.md",sourceDirName:"api/clients",slug:"/api/clients/hidkeyboard",permalink:"/devicescript/api/clients/hidkeyboard",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for HID Keyboard service"},sidebar:"tutorialSidebar"},l={},p=[{value:"Commands",id:"commands",level:2},{value:"clear",id:"clear",level:3}],s={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hidkeyboard"},"HidKeyboard"),(0,a.kt)("p",null,"Control a HID keyboard."),(0,a.kt)("p",null,"The codes for the key (selectors) is defined in the ",(0,a.kt)("a",{parentName:"p",href:"https://usb.org/sites/default/files/hut1_21.pdf"},"HID Keyboard\nspecification"),", chapter 10 Keyboard/Keypad Page, page 81.\nModifiers are in page 87."),(0,a.kt)("p",null,"The device keeps tracks of the key state and is able to clear it all with the clear command."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"client for ",(0,a.kt)("a",{parentName:"li",href:"https://microsoft.github.io/jacdac-docs/services/hidkeyboard/"},"HID Keyboard service")),(0,a.kt)("li",{parentName:"ul"},"inherits Role")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { HidKeyboard } from "@devicescript/core"\n\nconst hidKeyboard = new HidKeyboard()\n')),(0,a.kt)("p",null),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("h3",{id:"clear"},"clear"),(0,a.kt)("p",null,"Clears all pressed keys."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"hidKeyboard.clear(): Promise<void>\n")),(0,a.kt)("p",null))}u.isMDXComponent=!0}}]);