"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5255],{35318:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>N});var r=a(27378);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),o=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},s=function(t){var e=o(t.components);return r.createElement(d.Provider,{value:e},t.children)},m="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,d=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=o(a),k=n,N=m["".concat(d,".").concat(k)]||m[k]||g[k]||i;return a?r.createElement(N,p(p({ref:e},s),{},{components:a})):r.createElement(N,p({ref:e},s))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,p=new Array(i);p[0]=k;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l[m]="string"==typeof t?t:n,p[1]=l;for(var o=2;o<i;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},29223:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=a(25773),n=(a(27378),a(35318));const i={description:"Espressif ESP32-S3 DevKitM"},p="Espressif ESP32-S3 DevKitM",l={unversionedId:"devices/esp32/esp32s3-devkit-m",id:"devices/esp32/esp32s3-devkit-m",title:"Espressif ESP32-S3 DevKitM",description:"Espressif ESP32-S3 DevKitM",source:"@site/docs/devices/esp32/esp32s3-devkit-m.mdx",sourceDirName:"devices/esp32",slug:"/devices/esp32/esp32s3-devkit-m",permalink:"/devicescript/devices/esp32/esp32s3-devkit-m",draft:!1,tags:[],version:"current",frontMatter:{description:"Espressif ESP32-S3 DevKitM"},sidebar:"tutorialSidebar",previous:{title:"Espressif ESP32-S3 (bare)",permalink:"/devicescript/devices/esp32/esp32s3-bare"},next:{title:"Unexpected Maker FeatherS2 ESP32-S2",permalink:"/devicescript/devices/esp32/feather-s2"}},d={},o=[{value:"Features",id:"features",level:2},{value:"Stores",id:"stores",level:2},{value:"Pins",id:"pins",level:2},{value:"Firmware update",id:"firmware-update",level:2},{value:"Configuration",id:"configuration",level:2}],s={toc:o},m="wrapper";function g(t){let{components:e,...a}=t;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"espressif-esp32-s3-devkitm"},"Espressif ESP32-S3 DevKitM"),(0,n.kt)("p",null,"ESP32-S3 DevKitM development board. Should also work for DevKitC."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://microsoft.github.io/jacdac-docs/images/devices/espressif/esp32s3devkitmv10.catalog.jpg",alt:"Espressif ESP32-S3 DevKitM picture"})),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"WS2812B RGB LED on 48  (use ",(0,n.kt)("a",{parentName:"li",href:"/developer/status-light"},"setStatusLight")," to control)")),(0,n.kt)("h2",{id:"stores"},"Stores"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/hw-reference/esp32s3/user-guide-devkitm-1.html"},"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/hw-reference/esp32s3/user-guide-devkitm-1.html"))),(0,n.kt)("h2",{id:"pins"},"Pins"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"pin name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"hardware id"),(0,n.kt)("th",{parentName:"tr",align:"right"},"features"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"boot,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P1")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P10")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P11")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO11"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P12")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO12"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P13")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO13"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P14")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO14"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P15")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO15"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P16")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO16"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P17")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO17"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogOut,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P18")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO18"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogOut,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P2")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P21")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO21"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P3")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P33")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO33"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P34")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO34"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P38")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO38"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P39")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO39"),(0,n.kt)("td",{parentName:"tr",align:"right"},"debug,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P4")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P40")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO40"),(0,n.kt)("td",{parentName:"tr",align:"right"},"debug,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P41")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO41"),(0,n.kt)("td",{parentName:"tr",align:"right"},"debug,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P42")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO42"),(0,n.kt)("td",{parentName:"tr",align:"right"},"debug,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P45")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO45"),(0,n.kt)("td",{parentName:"tr",align:"right"},"boot,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P46")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO46"),(0,n.kt)("td",{parentName:"tr",align:"right"},"boot,  input")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P47")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO47"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P5")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P6")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO6"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P7")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO7"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P8")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO8"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P9")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO9"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"led.pin")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO48"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")))),(0,n.kt)("h2",{id:"firmware-update"},"Firmware update"),(0,n.kt)("p",null,"In ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/vscode"},"Visual Studio Code"),",\nselect ",(0,n.kt)("strong",{parentName:"p"},"DeviceScript: Flash Firmware...")," from the command palette."),(0,n.kt)("p",null,"Run this ",(0,n.kt)("a",{parentName:"p",href:"/api/cli"},"command line")," command and follow the instructions."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"devicescript flash --board esp32s3_devkit_m\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/devicescript-esp32/releases/latest/download/devicescript-esp32s3-esp32s3_devkit_m-0x0.bin"},"Firmware"))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="esp32s3_devkit_m.json"',title:'"esp32s3_devkit_m.json"'},'{\n    "$schema": "https://raw.githubusercontent.com/microsoft/devicescript-esp32/main/boards/esp32deviceconfig.schema.json",\n    "id": "esp32s3_devkit_m",\n    "devName": "Espressif ESP32-S3 DevKitM",\n    "productId": "0x3574d277",\n    "$description": "ESP32-S3 DevKitM development board. Should also work for DevKitC.",\n    "archId": "esp32s3",\n    "url": "https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/hw-reference/esp32s3/user-guide-devkitm-1.html",\n    "led": {\n        "pin": 48,\n        "type": 1\n    },\n    "pins": {\n        "P0": 0,\n        "P1": 1,\n        "P10": 10,\n        "P11": 11,\n        "P12": 12,\n        "P13": 13,\n        "P14": 14,\n        "P15": 15,\n        "P16": 16,\n        "P17": 17,\n        "P18": 18,\n        "P2": 2,\n        "P21": 21,\n        "P3": 3,\n        "P33": 33,\n        "P34": 34,\n        "P38": 38,\n        "P39": 39,\n        "P4": 4,\n        "P40": 40,\n        "P41": 41,\n        "P42": 42,\n        "P45": 45,\n        "P46": 46,\n        "P47": 47,\n        "P5": 5,\n        "P6": 6,\n        "P7": 7,\n        "P8": 8,\n        "P9": 9\n    },\n    "uartLog": true\n}\n')))}g.isMDXComponent=!0}}]);