"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4700],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(b,o(o({ref:t},c),{},{components:a})):n.createElement(b,o({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39798:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(27378),r=a(38944);const i={tabItem:"tabItem_wHwb"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:a},t)}},23930:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(25773),r=a(27378),i=a(38944),o=a(83457),l=a(3620),s=a(30654),u=a(70784),c=a(71819);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,u]=b({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),k=(()=>{const e=s??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var k=a(76457);const v={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};function g(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(h,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},96035:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=a(25773),r=(a(27378),a(35318)),i=a(23930),o=a(39798);const l={title:"Custom Packages"},s="Publishing a DeviceScript package",u={unversionedId:"developer/packages/custom",id:"developer/packages/custom",title:"Custom Packages",description:"Using npm, GitHub releases, or other package manager is the recommended way to share your DeviceScript code.",source:"@site/docs/developer/packages/custom.mdx",sourceDirName:"developer/packages",slug:"/developer/packages/custom",permalink:"/devicescript/developer/packages/custom",draft:!1,tags:[],version:"current",frontMatter:{title:"Custom Packages"},sidebar:"tutorialSidebar",previous:{title:"Packages",permalink:"/devicescript/developer/packages/"},next:{title:"Bundled firmware",permalink:"/devicescript/developer/bundle"}},c={},p=[{value:"Getting started",id:"getting-started",level:2},{value:"Naming convention",id:"naming-convention",level:2},{value:"Publishing",id:"publishing",level:2},{value:"Development notes",id:"development-notes",level:2}],d={toc:p},m="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"publishing-a-devicescript-package"},"Publishing a DeviceScript package"),(0,r.kt)("p",null,"Using npm, GitHub releases, or other package manager is the recommended way to share your DeviceScript code.\nThe process is very similar to publishing packages for node.js/web on npm."),(0,r.kt)("p",null,"Here are some examples of custom packages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pelikhan/devicescript-adafruit-io/"},"Adafruit.io create data")," to upload sensor data to io.adafruit.com"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pelikhan/devicescript-note"},"Blues.io note api")," to interact with blues.io notecard"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pelikhan/devicescript-blynk"},"Blynk.io")," to upload data to blynk.io")),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"To create a DeviceScript library from your project, run this command\nor use ",(0,r.kt)("strong",{parentName:"p"},"DeviceScript: Add npm...")," from the command palette in Visual Studio Code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn devs add npm\n")),(0,r.kt)("p",null,"This will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"remove the ",(0,r.kt)("inlineCode",{parentName:"li"},'"private"')," field from ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")),(0,r.kt)("li",{parentName:"ul"},"add ",(0,r.kt)("inlineCode",{parentName:"li"},'"devicescript": { "library": true }')," (this is required)"),(0,r.kt)("li",{parentName:"ul"},"set ",(0,r.kt)("inlineCode",{parentName:"li"},'"main": "src/index.ts"')," (",(0,r.kt)("inlineCode",{parentName:"li"},"src/index.ts")," is created if missing)"),(0,r.kt)("li",{parentName:"ul"},"set ",(0,r.kt)("inlineCode",{parentName:"li"},'"files"')," field"),(0,r.kt)("li",{parentName:"ul"},"add ",(0,r.kt)("inlineCode",{parentName:"li"},'"license"')),(0,r.kt)("li",{parentName:"ul"},"add ",(0,r.kt)("inlineCode",{parentName:"li"},'"keywords": ["devicescript"]')," - keep this so npm search works better!"),(0,r.kt)("li",{parentName:"ul"},"add ",(0,r.kt)("inlineCode",{parentName:"li"},'"author"')," and ",(0,r.kt)("inlineCode",{parentName:"li"},'"repository"')," if they can be inferred")),(0,r.kt)("p",null,"All of these can be of course edited in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," afterwards."),(0,r.kt)("h2",{id:"naming-convention"},"Naming convention"),(0,r.kt)("p",null,"In particular it's recommended to name your package ",(0,r.kt)("inlineCode",{parentName:"p"},"devicescript-something"),"."),(0,r.kt)("h2",{id:"publishing"},"Publishing"),(0,r.kt)("p",null,"After this step, you can publish your package using your favorite npm publishing pipeline."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A DeviceScript does not require any special build assets.\nYou can create a GitHub release and use as a dependency in your projects."),(0,r.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save user/repo@version\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add user/repo@version\n"))),(0,r.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add user/repo@version\n"))))),(0,r.kt)("h2",{id:"development-notes"},"Development notes"),(0,r.kt)("p",null,"Note that regular DeviceScript applications typically use ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main.ts")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"src/mainSomething.ts"),")\nas the application entry point.\nThis is typically, ",(0,r.kt)("strong",{parentName:"p"},"not")," the right choice for ",(0,r.kt)("strong",{parentName:"p"},"library")," entry point."),(0,r.kt)("p",null,"You can keep your ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main.ts")," file as an example or test for the library,\nbut best to stick to ",(0,r.kt)("inlineCode",{parentName:"p"},'"main": "src/index.ts"')," in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."))}b.isMDXComponent=!0}}]);