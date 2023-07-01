"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7486],{35318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||c;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var r=n(25773),o=(n(27378),n(35318));const c={title:"Network and Sockets",sidebar_position:14},i="Network",a={unversionedId:"developer/net/index",id:"developer/net/index",title:"Network and Sockets",description:"DeviceScript supports TCP, TLS, MQTT and HTTP/HTTPS sockets on specific devices.",source:"@site/docs/developer/net/index.mdx",sourceDirName:"developer/net",slug:"/developer/net/",permalink:"/devicescript/developer/net/",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Network and Sockets",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Low Power",permalink:"/devicescript/developer/low-power"},next:{title:"Encrypted Fetch",permalink:"/devicescript/developer/net/encrypted-fetch"}},s={},p=[{value:"fetch",id:"fetch",level:2},{value:"encryptedFetch",id:"encryptedfetch",level:2},{value:"MQTT client",id:"mqtt-client",level:2},{value:"TCP/TLS Sockets",id:"tcptls-sockets",level:2}],l={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"network"},"Network"),(0,o.kt)("p",null,"DeviceScript supports TCP, TLS, MQTT and HTTP/HTTPS sockets on specific ",(0,o.kt)("a",{parentName:"p",href:"/devices"},"devices"),"."),(0,o.kt)("h2",{id:"fetch"},"fetch"),(0,o.kt)("p",null,"DeviceScript provides the familiar ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," function to issue HTTP/HTTPS requests.\n",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," is designed to match the browser ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch API"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { fetch } from "@devicescript/net"\n\nconst res = await fetch(`https://github.com/status.json`)\nconst body = await res.json()\nconsole.log(`GitHub is ${body.status}`)\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/devicescript/blob/main/packages/net/src/fetch.ts"},"fetch sources"),"\ncan help you with understanding how to use sockets.")),(0,o.kt)("h2",{id:"encryptedfetch"},"encryptedFetch"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/developer/net/encrypted-fetch"},"encryptedFetch")," function lets you\nHTTP POST encrypted data and read encrypted responses using symmetric encryption\n(AES-256-CCM)."),(0,o.kt)("h2",{id:"mqtt-client"},"MQTT client"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/developer/net/mqtt"},"startMQTTClient")," function connects to a MQTT broker using TCP or TLS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { startMQTTClient } from "@devicescript/net"\n\nconst mqtt = await startMQTTClient({\n    host: "broker.hivemq.com",\n    proto: "tcp",\n    port: 1883,\n})\nawait mqtt.publish("devs/log", "hello!")\n')),(0,o.kt)("h2",{id:"tcptls-sockets"},"TCP/TLS Sockets"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," function to open a socket TCP or TLS socket."),(0,o.kt)("p",null,"This example issues is HTTPS request to the Github.com status API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { connect } from "@devicescript/net"\n\nconst socket = await connect({ proto: "tls", host: "github.com", port: 443 })\nawait socket.send(`GET /status.json HTTP/1.1\nuser-agent: DeviceScript fetch()\naccept: */*\nhost: github.com\nconnection: close\n\n`)\nconst status = await socket.readLine()\nconsole.log(status)\nawait socket.close()\n')))}u.isMDXComponent=!0}}]);