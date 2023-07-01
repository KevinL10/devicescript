"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1950],{35318:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),h=i,v=u["".concat(c,".").concat(h)]||u[h]||f[h]||a;return r?n.createElement(v,o(o({ref:t},l),{},{components:r})):n.createElement(v,o({ref:t},l))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},38642:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(25773),i=(r(27378),r(35318));const a={description:"Mounts a switch server",title:"Switch"},o="Switch",s={unversionedId:"api/servers/switch",id:"api/servers/switch",title:"Switch",description:"Mounts a switch server",source:"@site/docs/api/servers/switch.md",sourceDirName:"api/servers",slug:"/api/servers/switch",permalink:"/devicescript/api/servers/switch",draft:!1,tags:[],version:"current",frontMatter:{description:"Mounts a switch server",title:"Switch"},sidebar:"tutorialSidebar",previous:{title:"SS1306",permalink:"/devicescript/api/servers/ssd1306"},next:{title:"Water Level",permalink:"/devicescript/api/servers/waterlevel"}},c={},p=[{value:"Options",id:"options",level:2},{value:"pin",id:"pin",level:3},{value:"options",id:"options-1",level:3}],l={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"switch"},"Switch"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"startSwitch")," function starts a ",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/jacdac-docs/services/switch"},"switch")," server on the device\nand returns a ",(0,i.kt)("a",{parentName:"p",href:"/api/clients/switch"},"client"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { gpio } from "@devicescript/core"\nimport { startSwitch } from "@devicescript/servers"\n\nconst sw = startSwitch({\n    pin: gpio(2),\n})\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/jacdac-docs/services/_base/"},"service instance name")," is automatically set to the variable name. In this example, it is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"switch"),"."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"pin"},"pin"),(0,i.kt)("p",null,"The pin hardware identifier on which to mount the relay."),(0,i.kt)("h3",{id:"options-1"},"options"),(0,i.kt)("p",null,"Other configuration options are available in the options parameter."))}f.isMDXComponent=!0}}]);