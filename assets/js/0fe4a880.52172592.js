"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[831],{35318:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return t?a.createElement(k,l(l({ref:n},u),{},{components:t})):a.createElement(k,l({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},71113:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(25773),r=(t(27378),t(35318));const i={pagination_prev:null,pagination_next:null,description:"DeviceScript client for Arcade Sound service"},l="ArcadeSound",o={unversionedId:"api/clients/arcadesound",id:"api/clients/arcadesound",title:"ArcadeSound",description:"DeviceScript client for Arcade Sound service",source:"@site/docs/api/clients/arcadesound.md",sourceDirName:"api/clients",slug:"/api/clients/arcadesound",permalink:"/devicescript/api/clients/arcadesound",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for Arcade Sound service"},sidebar:"tutorialSidebar"},p={},c=[{value:"Commands",id:"commands",level:2},{value:"play",id:"play",level:3},{value:"Registers",id:"registers",level:2},{value:"sampleRate",id:"rw:sampleRate",level:3},{value:"bufferSize",id:"const:bufferSize",level:3},{value:"bufferPending",id:"ro:bufferPending",level:3}],u={toc:c},d="wrapper";function s(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"arcadesound"},"ArcadeSound"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This service is experimental and may change in the future.")),(0,r.kt)("p",null,"A sound playing device."),(0,r.kt)("p",null,"This is typically run over an SPI connection, not regular single-wire Jacdac."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"client for ",(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/jacdac-docs/services/arcadesound/"},"Arcade Sound service")),(0,r.kt)("li",{parentName:"ul"},"inherits Role")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { ArcadeSound } from "@devicescript/core"\n\nconst arcadeSound = new ArcadeSound()\n')),(0,r.kt)("p",null),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("h3",{id:"play"},"play"),(0,r.kt)("p",null,"Play samples, which are single channel, signed 16-bit little endian values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"arcadeSound.play(samples: Buffer): Promise<void>\n")),(0,r.kt)("h2",{id:"registers"},"Registers"),(0,r.kt)("h3",{id:"rw:sampleRate"},"sampleRate"),(0,r.kt)("p",null,"Get or set playback sample rate (in samples per second).\nIf you set it, read it back, as the value may be rounded up or down."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u22.10"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read and write"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { ArcadeSound } from "@devicescript/core"\n\nconst arcadeSound = new ArcadeSound()\n// ...\nconst value = await arcadeSound.sampleRate.read()\nawait arcadeSound.sampleRate.write(value)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"track incoming values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { ArcadeSound } from "@devicescript/core"\n\nconst arcadeSound = new ArcadeSound()\n// ...\narcadeSound.sampleRate.subscribe(async (value) => {\n    ...\n})\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("h3",{id:"const:bufferSize"},"bufferSize"),(0,r.kt)("p",null,"The size of the internal audio buffer."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u32"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read only"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { ArcadeSound } from "@devicescript/core"\n\nconst arcadeSound = new ArcadeSound()\n// ...\nconst value = await arcadeSound.bufferSize.read()\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("h3",{id:"ro:bufferPending"},"bufferPending"),(0,r.kt)("p",null,"How much data is still left in the buffer to play.\nClients should not send more data than ",(0,r.kt)("inlineCode",{parentName:"p"},"buffer_size - buffer_pending"),",\nbut can keep the ",(0,r.kt)("inlineCode",{parentName:"p"},"buffer_pending")," as low as they want to ensure low latency\nof audio playback."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u32"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read only"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { ArcadeSound } from "@devicescript/core"\n\nconst arcadeSound = new ArcadeSound()\n// ...\nconst value = await arcadeSound.bufferPending.read()\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"track incoming values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { ArcadeSound } from "@devicescript/core"\n\nconst arcadeSound = new ArcadeSound()\n// ...\narcadeSound.bufferPending.subscribe(async (value) => {\n    ...\n})\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("p",null))}s.isMDXComponent=!0}}]);