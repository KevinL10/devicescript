"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9917],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,v=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(v,l(l({ref:t},c),{},{components:n})):a.createElement(v,l({ref:t},c))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(25773),i=(n(27378),n(35318));const r={pagination_prev:null,pagination_next:null,description:"DeviceScript client for Satellite Navigation System service"},l="SatNav",o={unversionedId:"api/clients/satelittenavigationsystem",id:"api/clients/satelittenavigationsystem",title:"SatNav",description:"DeviceScript client for Satellite Navigation System service",source:"@site/docs/api/clients/satelittenavigationsystem.md",sourceDirName:"api/clients",slug:"/api/clients/satelittenavigationsystem",permalink:"/devicescript/api/clients/satelittenavigationsystem",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for Satellite Navigation System service"},sidebar:"tutorialSidebar"},s={},p=[{value:"Registers",id:"registers",level:2},{value:"reading",id:"ro:reading",level:3},{value:"enabled",id:"rw:enabled",level:3},{value:"Events",id:"events",level:2},{value:"inactive",id:"inactive",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"satnav"},"SatNav"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This service is experimental and may change in the future.")),(0,i.kt)("p",null,"A satellite-based navigation system like GPS, Gallileo, ..."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"client for ",(0,i.kt)("a",{parentName:"li",href:"https://microsoft.github.io/jacdac-docs/services/satelittenavigationsystem/"},"Satellite Navigation System service")),(0,i.kt)("li",{parentName:"ul"},"inherits Sensor")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { SatNav } from "@devicescript/core"\n\nconst satNav = new SatNav()\n')),(0,i.kt)("p",null),(0,i.kt)("h2",{id:"registers"},"Registers"),(0,i.kt)("h3",{id:"ro:reading"},"reading"),(0,i.kt)("p",null,"Reported coordinates, geometric altitude and time of position. Altitude accuracy is 0 if not available."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Register<any[]>")," (packing format ",(0,i.kt)("inlineCode",{parentName:"p"},"u64 i9.23 i9.23 u16.16 i26.6 u16.16"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"track incoming values"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { SatNav } from "@devicescript/core"\n\nconst satNav = new SatNav()\n// ...\nsatNav.reading.subscribe(async (value) => {\n    ...\n})\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,i.kt)("h3",{id:"rw:enabled"},"enabled"),(0,i.kt)("p",null,"Enables or disables the GPS module"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Register<boolean>")," (packing format ",(0,i.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"read and write"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { SatNav } from "@devicescript/core"\n\nconst satNav = new SatNav()\n// ...\nconst value = await satNav.enabled.read()\nawait satNav.enabled.write(value)\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"track incoming values")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { SatNav } from "@devicescript/core"\n\nconst satNav = new SatNav()\n// ...\nsatNav.enabled.subscribe(async (value) => {\n    ...\n})\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"inactive"},"inactive"),(0,i.kt)("p",null,"The module is disabled or lost connection with satellites."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"satNav.inactive.subscribe(() => {\n\n})\n")),(0,i.kt)("p",null))}m.isMDXComponent=!0}}]);