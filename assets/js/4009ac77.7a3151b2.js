"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5709],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36721:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(25773),o=(r(27378),r(35318));const i={title:"Blues.io Notecard",sidebar_position:5.5},a="Blues.io Notecard",l={unversionedId:"developer/iot/blues-io/index",id:"developer/iot/blues-io/index",title:"Blues.io Notecard",description:"The Blues.io Notecard provides",source:"@site/docs/developer/iot/blues-io/index.mdx",sourceDirName:"developer/iot/blues-io",slug:"/developer/iot/blues-io/",permalink:"/devicescript/developer/iot/blues-io/",draft:!1,tags:[],version:"current",sidebarPosition:5.5,frontMatter:{title:"Blues.io Notecard",sidebar_position:5.5},sidebar:"tutorialSidebar",previous:{title:"Adafruit.io",permalink:"/devicescript/developer/iot/adafruit-io/"},next:{title:"Blynk.io",permalink:"/devicescript/developer/iot/blynk-io/"}},c={},s=[{value:"Getting started",id:"getting-started",level:2},{value:"Configuration",id:"configuration",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bluesio-notecard"},"Blues.io Notecard"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://blues.io/products/notecard/"},"Blues.io Notecard")," provides\na simple way to add cellular connectivity to your IoT project."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pelikhan/devicescript-note"},"pelikhan/devicescript-note")," package uses ",(0,o.kt)("a",{parentName:"p",href:"https://dev.blues.io/guides-and-tutorials/notecard-guides/serial-over-i2c-protocol/"},"I2C to communicate with the Notecard"),"."),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new DeviceScript project"),(0,o.kt)("li",{parentName:"ul"},"Add the library to your DeviceScript project:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save pelikhan/devicescript-note\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developer/settings"},"Add settings")," to your project"),(0,o.kt)("li",{parentName:"ul"},"Add the notehub product UID into your settings.\nBy default, DeviceScript will use the deviceid as a serial number; but you can override this setting.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# .env.defaults\nNOTE_PUID=your-product-uid\nNOTE_SN=your-serial-number\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect the notecard to your I2C pins and power it up.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Temperature } from "@devicescript/core"\nimport { delay, millis } from "@devicescript/core"\nimport { init, request, NoteAddRequest } from "devicescript-note"\n\n// configure product UID and serial number\nawait init()\n\n// connect sensors\nconst temperature = new Temperature()\n\nwhile (true) {\n    // read sensor values\n    const t = await temperature.reading.read()\n\n    // send node.add request\n    await request(<NoteAddRequest>{\n        req: "note.add",\n        body: { t },\n    })\n\n    // take a break\n    await delay(10000)\n}\n')))}d.isMDXComponent=!0}}]);