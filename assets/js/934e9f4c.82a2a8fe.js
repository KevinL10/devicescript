"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4507],{35318:(I,i,b)=>{b.d(i,{Zo:()=>g,kt:()=>n});var m=b(27378);function c(I,i,b){return i in I?Object.defineProperty(I,i,{value:b,enumerable:!0,configurable:!0,writable:!0}):I[i]=b,I}function l(I,i){var b=Object.keys(I);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(I);i&&(m=m.filter((function(i){return Object.getOwnPropertyDescriptor(I,i).enumerable}))),b.push.apply(b,m)}return b}function Z(I){for(var i=1;i<arguments.length;i++){var b=null!=arguments[i]?arguments[i]:{};i%2?l(Object(b),!0).forEach((function(i){c(I,i,b[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(b)):l(Object(b)).forEach((function(i){Object.defineProperty(I,i,Object.getOwnPropertyDescriptor(b,i))}))}return I}function e(I,i){if(null==I)return{};var b,m,c=function(I,i){if(null==I)return{};var b,m,c={},l=Object.keys(I);for(m=0;m<l.length;m++)b=l[m],i.indexOf(b)>=0||(c[b]=I[b]);return c}(I,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(I);for(m=0;m<l.length;m++)b=l[m],i.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(I,b)&&(c[b]=I[b])}return c}var t=m.createContext({}),a=function(I){var i=m.useContext(t),b=i;return I&&(b="function"==typeof I?I(i):Z(Z({},i),I)),b},g=function(I){var i=a(I.components);return m.createElement(t.Provider,{value:i},I.children)},s="mdxType",S={inlineCode:"code",wrapper:function(I){var i=I.children;return m.createElement(m.Fragment,{},i)}},W=m.forwardRef((function(I,i){var b=I.components,c=I.mdxType,l=I.originalType,t=I.parentName,g=e(I,["components","mdxType","originalType","parentName"]),s=a(b),W=c,n=s["".concat(t,".").concat(W)]||s[W]||S[W]||l;return b?m.createElement(n,Z(Z({ref:i},g),{},{components:b})):m.createElement(n,Z({ref:i},g))}));function n(I,i){var b=arguments,c=i&&i.mdxType;if("string"==typeof I||c){var l=b.length,Z=new Array(l);Z[0]=W;var e={};for(var t in i)hasOwnProperty.call(i,t)&&(e[t]=i[t]);e.originalType=I,e[s]="string"==typeof I?I:c,Z[1]=e;for(var a=2;a<l;a++)Z[a]=b[a];return m.createElement.apply(null,Z)}return m.createElement.apply(null,b)}W.displayName="MDXCreateElement"},50021:(I,i,b)=>{b.r(i),b.d(i,{assets:()=>t,contentTitle:()=>Z,default:()=>S,frontMatter:()=>l,metadata:()=>e,toc:()=>a});var m=b(25773),c=(b(27378),b(35318));const l={},Z="Transform operators",e={unversionedId:"api/observables/transform",id:"api/observables/transform",title:"Transform operators",description:"map",source:"@site/docs/api/observables/transform.mdx",sourceDirName:"api/observables",slug:"/api/observables/transform",permalink:"/devicescript/api/observables/transform",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Filter Operators",permalink:"/devicescript/api/observables/filter"},next:{title:"Utilities operators",permalink:"/devicescript/api/observables/utils"}},t={},a=[{value:"map",id:"map",level:2},{value:"scan",id:"scan",level:2},{value:"timestamp",id:"timestamp",level:2},{value:"switchMap",id:"switchmap",level:2}],g={toc:a},s="wrapper";function S(I){let{components:i,...l}=I;return(0,c.kt)(s,(0,m.Z)({},g,l,{components:i,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"transform-operators"},"Transform operators"),(0,c.kt)("h2",{id:"map"},"map"),(0,c.kt)("p",null,"Applies a converter function to converts the observed value into a new value."),(0,c.kt)("img",{alt:"output.svg",src:b(5405).Z,width:"312",height:"260"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},'import { from, map } from "@devicescript/observables"\n\nconst obs = from([1, 2, 3])\n\nobs\n    // highlight-next-line\n    .pipe(map(v => v * v))\n    .subscribe(v => console.log(v))\n')),(0,c.kt)("h2",{id:"scan"},"scan"),(0,c.kt)("p",null,'Applies an accumulator (or "reducer function") to each value from the source.'),(0,c.kt)("img",{alt:"output.svg",src:b(63522).Z,width:"372",height:"260"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},'import { from, scan } from "@devicescript/observables"\n\nconst obs = from([1, 2, 3])\n\nobs.pipe(\n    // highlight-next-line\n    scan((p, c) => p + c, 0)\n).subscribe(v => console.log(v))\n')),(0,c.kt)("h2",{id:"timestamp"},"timestamp"),(0,c.kt)("p",null,"Wraps value in an object with a ",(0,c.kt)("inlineCode",{parentName:"p"},"timestamp")," property and ",(0,c.kt)("inlineCode",{parentName:"p"},"lastTimestamp")," property."),(0,c.kt)("img",{alt:"output.svg",src:b(21622).Z,width:"232",height:"410"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},'import { from, timestamp } from "@devicescript/observables"\n\nconst obs = from([1, 2, 3])\n\nobs.pipe(\n    // highlight-next-line\n    timestamp()\n).subscribe(v => console.log(v))\n')),(0,c.kt)("h2",{id:"switchmap"},"switchMap"),(0,c.kt)("p",null,"Takes a source Observable and calls transform(T) for each emitted value.\nIt will immediately subscribe to any Observable coming from transform(T), b\nut in addition to this, will unsubscribe() from any prior Observables -\nso that there is only ever one Observable subscribed at any one time."),(0,c.kt)("img",{alt:"output.svg",src:b(26265).Z,width:"702",height:"260"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},'import { from, switchMap } from "@devicescript/observables"\n\nconst obs = from([1, 2, 3])\n\nobs.pipe(\n    // highlight-next-line\n    switchMap(v => from([v + 1, v + 1, v + 1]))\n).subscribe(v => console.log(v))\n')))}S.isMDXComponent=!0},63522:(I,i,b)=>{b.d(i,{Z:()=>m});const m="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzIuMzA5NDAxMDc2NzU4NSAyNjAiIHdpZHRoPSIzNzIuMzA5NDAxMDc2NzU4NSIgaGVpZ2h0PSIyNjAiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIzNzIuMzA5NDAxMDc2NzU4NSIgaGVpZ2h0PSIyNjAiIGZpbGw9IndoaXRlIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgMjUpIj48Zz48Zz48bGluZSB4MT0iMCIgeTE9IjI1IiB4Mj0iMzIwIiB5Mj0iMjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjxwb2x5bGluZSBwb2ludHM9IjMxMCwxOS4yMjY0OTczMDgxMDM3NDIgMzIwLDI1IDMxMCwzMC43NzM1MDI2OTE4OTYyNTgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMCkiPjxlbGxpcHNlIGN4PSIyMCIgY3k9IjI1IiByeD0iMTkiIHJ5PSIxOSIgZmlsbD0iaHNsKDE0NywgNjAlLCA4MCUpIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIwIiB5PSIwIiBmaWxsPSJibGFjayIgZm9udC1mYW1pbHk9IkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMThweCIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgZm9udC1zdHlsZT0ibm9ybWFsIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCAyNSkiPjM8L3RleHQ+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMCAwKSI+PGVsbGlwc2UgY3g9IjIwIiBjeT0iMjUiIHJ4PSIxOSIgcnk9IjE5IiBmaWxsPSJoc2woMjA2LCA2MCUsIDgwJSkiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjAiIHk9IjAiIGZpbGw9ImJsYWNrIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOHB4IiBmb250LXdlaWdodD0ibm9ybWFsIiBmb250LXN0eWxlPSJub3JtYWwiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwIDI1KSI+MjwvdGV4dD48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAgMCkiPjxlbGxpcHNlIGN4PSIyMCIgY3k9IjI1IiByeD0iMTkiIHJ5PSIxOSIgZmlsbD0iaHNsKDM1LCA2MCUsIDgwJSkiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjAiIHk9IjAiIGZpbGw9ImJsYWNrIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOHB4IiBmb250LXdlaWdodD0ibm9ybWFsIiBmb250LXN0eWxlPSJub3JtYWwiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwIDI1KSI+MTwvdGV4dD48L2c+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNzApIj48cmVjdCB4PSIxIiB5PSIxMSIgd2lkdGg9IjMyMC4zMDk0MDEwNzY3NTg1IiBoZWlnaHQ9IjQ4IiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiByeD0iMCIvPjx0ZXh0IHg9IjE2MS4xNTQ3MDA1MzgzNzkyNSIgeT0iMzUiIGZpbGw9ImJsYWNrIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNHB4IiBmb250LXdlaWdodD0ibm9ybWFsIiBmb250LXN0eWxlPSJub3JtYWwiIHdpZHRoPSIzMjIuMzA5NDAxMDc2NzU4NSI+c2NhbigocCwgYykgPSZndDsgcCArIGMsIDApPC90ZXh0PjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE2MCkiPjxnPjxsaW5lIHgxPSIwIiB5MT0iMjUiIHgyPSIzMjAiIHkyPSIyNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBvbHlsaW5lIHBvaW50cz0iMzEwLDE5LjIyNjQ5NzMwODEwMzc0MiAzMjAsMjUgMzEwLDMwLjc3MzUwMjY5MTg5NjI1OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1MCAwKSI+PGVsbGlwc2UgY3g9IjIwIiBjeT0iMjUiIHJ4PSIxOSIgcnk9IjE5IiBmaWxsPSJoc2woMzA2LCA2MCUsIDgwJSkiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjAiIHk9IjAiIGZpbGw9ImJsYWNrIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOHB4IiBmb250LXdlaWdodD0ibm9ybWFsIiBmb250LXN0eWxlPSJub3JtYWwiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwIDI1KSI+NjwvdGV4dD48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMwIDApIj48ZWxsaXBzZSBjeD0iMjAiIGN5PSIyNSIgcng9IjE5IiByeT0iMTkiIGZpbGw9ImhzbCgxNDcsIDYwJSwgODAlKSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMCIgeT0iMCIgZmlsbD0iYmxhY2siIGZvbnQtZmFtaWx5PSJBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4cHgiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZvbnQtc3R5bGU9Im5vcm1hbCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAgMjUpIj4zPC90ZXh0PjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMCAwKSI+PGVsbGlwc2UgY3g9IjIwIiBjeT0iMjUiIHJ4PSIxOSIgcnk9IjE5IiBmaWxsPSJoc2woMzUsIDYwJSwgODAlKSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMCIgeT0iMCIgZmlsbD0iYmxhY2siIGZvbnQtZmFtaWx5PSJBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4cHgiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZvbnQtc3R5bGU9Im5vcm1hbCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAgMjUpIj4xPC90ZXh0PjwvZz48L2c+PC9nPjwvc3ZnPg=="},5405:(I,i,b)=>{b.d(i,{Z:()=>m});const m="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMTIuMzA5NDAxMDc2NzU4NSAyNjAiIHdpZHRoPSIzMTIuMzA5NDAxMDc2NzU4NSIgaGVpZ2h0PSIyNjAiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIzMTIuMzA5NDAxMDc2NzU4NSIgaGVpZ2h0PSIyNjAiIGZpbGw9IndoaXRlIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgMjUpIj48Zz48Zz48bGluZSB4MT0iMCIgeTE9IjI1IiB4Mj0iMjYwIiB5Mj0iMjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjxwb2x5bGluZSBwb2ludHM9IjI1MCwxOS4yMjY0OTczMDgxMDM3NDIgMjYwLDI1IDI1MCwzMC43NzM1MDI2OTE4OTYyNTgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOTAgMCkiPjxlbGxpcHNlIGN4PSIyMCIgY3k9IjI1IiByeD0iMTkiIHJ5PSIxOSIgZmlsbD0iaHNsKDE0NywgNjAlLCA4MCUpIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIwIiB5PSIwIiBmaWxsPSJibGFjayIgZm9udC1mYW1pbHk9IkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMThweCIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgZm9udC1zdHlsZT0ibm9ybWFsIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCAyNSkiPjM8L3RleHQ+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMCAwKSI+PGVsbGlwc2UgY3g9IjIwIiBjeT0iMjUiIHJ4PSIxOSIgcnk9IjE5IiBmaWxsPSJoc2woMjA2LCA2MCUsIDgwJSkiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjAiIHk9IjAiIGZpbGw9ImJsYWNrIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOHB4IiBmb250LXdlaWdodD0ibm9ybWFsIiBmb250LXN0eWxlPSJub3JtYWwiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwIDI1KSI+MjwvdGV4dD48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAgMCkiPjxlbGxpcHNlIGN4PSIyMCIgY3k9IjI1IiByeD0iMTkiIHJ5PSIxOSIgZmlsbD0iaHNsKDM1LCA2MCUsIDgwJSkiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjAiIHk9IjAiIGZpbGw9ImJsYWNrIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOHB4IiBmb250LXdlaWdodD0ibm9ybWFsIiBmb250LXN0eWxlPSJub3JtYWwiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwIDI1KSI+MTwvdGV4dD48L2c+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNzApIj48cmVjdCB4PSIxIiB5PSIxMSIgd2lkdGg9IjI2MC4zMDk0MDEwNzY3NTg1IiBoZWlnaHQ9IjQ4IiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiByeD0iMCIvPjx0ZXh0IHg9IjEzMS4xNTQ3MDA1MzgzNzkyNSIgeT0iMzUiIGZpbGw9ImJsYWNrIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNHB4IiBmb250LXdlaWdodD0ibm9ybWFsIiBmb250LXN0eWxlPSJub3JtYWwiIHdpZHRoPSIyNjIuMzA5NDAxMDc2NzU4NSI+bWFwKHggPSZndDsgeCAqIHgpPC90ZXh0PjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE2MCkiPjxnPjxsaW5lIHgxPSIwIiB5MT0iMjUiIHgyPSIyNjAiIHkyPSIyNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBvbHlsaW5lIHBvaW50cz0iMjUwLDE5LjIyNjQ5NzMwODEwMzc0MiAyNjAsMjUgMjUwLDMwLjc3MzUwMjY5MTg5NjI1OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5MCAwKSI+PGVsbGlwc2UgY3g9IjIwIiBjeT0iMjUiIHJ4PSIxOSIgcnk9IjE5IiBmaWxsPSJoc2woMTc1LCA2MCUsIDgwJSkiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjAiIHk9IjAiIGZpbGw9ImJsYWNrIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOHB4IiBmb250LXdlaWdodD0ibm9ybWFsIiBmb250LXN0eWxlPSJub3JtYWwiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwIDI1KSI+OTwvdGV4dD48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAwIDApIj48ZWxsaXBzZSBjeD0iMjAiIGN5PSIyNSIgcng9IjE5IiByeT0iMTkiIGZpbGw9ImhzbCgxMTcsIDYwJSwgODAlKSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMCIgeT0iMCIgZmlsbD0iYmxhY2siIGZvbnQtZmFtaWx5PSJBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4cHgiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZvbnQtc3R5bGU9Im5vcm1hbCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAgMjUpIj40PC90ZXh0PjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMCAwKSI+PGVsbGlwc2UgY3g9IjIwIiBjeT0iMjUiIHJ4PSIxOSIgcnk9IjE5IiBmaWxsPSJoc2woMzUsIDYwJSwgODAlKSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMCIgeT0iMCIgZmlsbD0iYmxhY2siIGZvbnQtZmFtaWx5PSJBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4cHgiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZvbnQtc3R5bGU9Im5vcm1hbCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAgMjUpIj4xPC90ZXh0PjwvZz48L2c+PC9nPjwvc3ZnPg=="},26265:(I,i,b)=>{b.d(i,{Z:()=>m});const m="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3MDIuMzA5NDAxMDc2NzU4NSAyNjAiIHdpZHRoPSI3MDIuMzA5NDAxMDc2NzU4NSIgaGVpZ2h0PSIyNjAiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI3MDIuMzA5NDAxMDc2NzU4NSIgaGVpZ2h0PSIyNjAiIGZpbGw9IndoaXRlIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgMjUpIj48Zz48Zz48bGluZSB4MT0iMCIgeTE9IjI1IiB4Mj0iNDcwIiB5Mj0iMjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjxwb2x5bGluZSBwb2ludHM9IjQ2MCwxOS4yMjY0OTczMDgxMDM3NDIgNDcwLDI1IDQ2MCwzMC43NzM1MDI2OTE4OTYyNTgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MDAgMCkiPjxlbGxpcHNlIGN4PSIyMCIgY3k9IjI1IiByeD0iMTkiIHJ5PSIxOSIgZmlsbD0iaHNsKDExNywgNjAlLCA4MCUpIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIwIiB5PSIwIiBmaWxsPSJibGFjayIgZm9udC1mYW1pbHk9IkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMThweCIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgZm9udC1zdHlsZT0ibm9ybWFsIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCAyNSkiPjQ8L3RleHQ+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMxMCAwKSI+PGVsbGlwc2UgY3g9IjIwIiBjeT0iMjUiIHJ4PSIxOSIgcnk9IjE5IiBmaWxsPSJoc2woMTQ3LCA2MCUsIDgwJSkiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjAiIHk9IjAiIGZpbGw9ImJsYWNrIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOHB4IiBmb250LXdlaWdodD0ibm9ybWFsIiBmb250LXN0eWxlPSJub3JtYWwiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwIDI1KSI+MzwvdGV4dD48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIwIDApIj48ZWxsaXBzZSBjeD0iMjAiIGN5PSIyNSIgcng9IjE5IiByeT0iMTkiIGZpbGw9ImhzbCgyMDYsIDYwJSwgODAlKSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMCIgeT0iMCIgZmlsbD0iYmxhY2siIGZvbnQtZmFtaWx5PSJBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4cHgiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZvbnQtc3R5bGU9Im5vcm1hbCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAgMjUpIj4yPC90ZXh0PjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MCAwKSI+PGVsbGlwc2UgY3g9IjIwIiBjeT0iMjUiIHJ4PSIxOSIgcnk9IjE5IiBmaWxsPSJoc2woMzUsIDYwJSwgODAlKSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMCIgeT0iMCIgZmlsbD0iYmxhY2siIGZvbnQtZmFtaWx5PSJBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4cHgiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZvbnQtc3R5bGU9Im5vcm1hbCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAgMjUpIj4xPC90ZXh0PjwvZz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA3MCkiPjxyZWN0IHg9IjEiIHk9IjExIiB3aWR0aD0iNjUwLjMwOTQwMTA3Njc1ODUiIGhlaWdodD0iNDgiIGZpbGw9IndoaXRlIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIwIi8+PHRleHQgeD0iMzI2LjE1NDcwMDUzODM3OTI1IiB5PSIzNSIgZmlsbD0iYmxhY2siIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0cHgiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZvbnQtc3R5bGU9Im5vcm1hbCIgd2lkdGg9IjY1Mi4zMDk0MDEwNzY3NTg1Ij5zd2l0Y2hNYXAodiA9Jmd0OyBmcm9tKFt2KzEsIHYrMSwgdisxXSkpPC90ZXh0PjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE2MCkiPjxnPjxsaW5lIHgxPSIwIiB5MT0iMjUiIHgyPSI2NTAiIHkyPSIyNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBvbHlsaW5lIHBvaW50cz0iNjQwLDE5LjIyNjQ5NzMwODEwMzc0MiA2NTAsMjUgNjQwLDMwLjc3MzUwMjY5MTg5NjI1OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU4MCAwKSI+PGVsbGlwc2UgY3g9IjIwIiBjeT0iMjUiIHJ4PSIxOSIgcnk9IjE5IiBmaWxsPSJoc2woMTcwLCA2MCUsIDgwJSkiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjAiIHk9IjAiIGZpbGw9ImJsYWNrIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOHB4IiBmb250LXdlaWdodD0ibm9ybWFsIiBmb250LXN0eWxlPSJub3JtYWwiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwIDI1KSI+NTwvdGV4dD48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDkwIDApIj48ZWxsaXBzZSBjeD0iMjAiIGN5PSIyNSIgcng9IjE5IiByeT0iMTkiIGZpbGw9ImhzbCgxNzAsIDYwJSwgODAlKSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMCIgeT0iMCIgZmlsbD0iYmxhY2siIGZvbnQtZmFtaWx5PSJBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4cHgiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZvbnQtc3R5bGU9Im5vcm1hbCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAgMjUpIj41PC90ZXh0PjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MDAgMCkiPjxlbGxpcHNlIGN4PSIyMCIgY3k9IjI1IiByeD0iMTkiIHJ5PSIxOSIgZmlsbD0iaHNsKDE3MCwgNjAlLCA4MCUpIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIwIiB5PSIwIiBmaWxsPSJibGFjayIgZm9udC1mYW1pbHk9IkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMThweCIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgZm9udC1zdHlsZT0ibm9ybWFsIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCAyNSkiPjU8L3RleHQ+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMxMCAwKSI+PGVsbGlwc2UgY3g9IjIwIiBjeT0iMjUiIHJ4PSIxOSIgcnk9IjE5IiBmaWxsPSJoc2woMTE3LCA2MCUsIDgwJSkiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjAiIHk9IjAiIGZpbGw9ImJsYWNrIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOHB4IiBmb250LXdlaWdodD0ibm9ybWFsIiBmb250LXN0eWxlPSJub3JtYWwiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwIDI1KSI+NDwvdGV4dD48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIwIDApIj48ZWxsaXBzZSBjeD0iMjAiIGN5PSIyNSIgcng9IjE5IiByeT0iMTkiIGZpbGw9ImhzbCgxNDcsIDYwJSwgODAlKSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMCIgeT0iMCIgZmlsbD0iYmxhY2siIGZvbnQtZmFtaWx5PSJBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4cHgiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZvbnQtc3R5bGU9Im5vcm1hbCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAgMjUpIj4zPC90ZXh0PjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzAgMCkiPjxlbGxpcHNlIGN4PSIyMCIgY3k9IjI1IiByeD0iMTkiIHJ5PSIxOSIgZmlsbD0iaHNsKDIwNiwgNjAlLCA4MCUpIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIwIiB5PSIwIiBmaWxsPSJibGFjayIgZm9udC1mYW1pbHk9IkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMThweCIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgZm9udC1zdHlsZT0ibm9ybWFsIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCAyNSkiPjI8L3RleHQ+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwIDApIj48ZWxsaXBzZSBjeD0iMjAiIGN5PSIyNSIgcng9IjE5IiByeT0iMTkiIGZpbGw9ImhzbCgyMDYsIDYwJSwgODAlKSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMCIgeT0iMCIgZmlsbD0iYmxhY2siIGZvbnQtZmFtaWx5PSJBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4cHgiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZvbnQtc3R5bGU9Im5vcm1hbCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAgMjUpIj4yPC90ZXh0PjwvZz48L2c+PC9nPjwvc3ZnPg=="},21622:(I,i,b)=>{b.d(i,{Z:()=>m});const m="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMzIuMzA5NDAxMDc2NzU4NSA0MTAiIHdpZHRoPSIyMzIuMzA5NDAxMDc2NzU4NSIgaGVpZ2h0PSI0MTAiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMzIuMzA5NDAxMDc2NzU4NSIgaGVpZ2h0PSI0MTAiIGZpbGw9IndoaXRlIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgMjUpIHRyYW5zbGF0ZSgzMCAwKSI+PGc+PGc+PGxpbmUgeDE9IjAiIHkxPSI2MCIgeDI9IjE1MCIgeTI9IjYwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cG9seWxpbmUgcG9pbnRzPSIxNDAsNTQuMjI2NDk3MzA4MTAzNzQ1IDE1MCw2MCAxNDAsNjUuNzczNTAyNjkxODk2MjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzAgMCkiPjxlbGxpcHNlIGN4PSI2MCIgY3k9IjYwIiByeD0iNTkiIHJ5PSI1OSIgZmlsbD0iaHNsKDMyMSwgNjAlLCA4MCUpIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIwIiB5PSIwIiBmaWxsPSJibGFjayIgZm9udC1mYW1pbHk9IkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMThweCIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgZm9udC1zdHlsZT0ibm9ybWFsIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MCA2MCkiPmE8L3RleHQ+PC9nPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE0MCkgdHJhbnNsYXRlKC0zMCAwKSI+PHJlY3QgeD0iMSIgeT0iMTEiIHdpZHRoPSIxODAuMzA5NDAxMDc2NzU4NSIgaGVpZ2h0PSI1OCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgcng9IjAiLz48dGV4dCB4PSI5MS4xNTQ3MDA1MzgzNzkyNSIgeT0iNDAiIGZpbGw9ImJsYWNrIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNHB4IiBmb250LXdlaWdodD0ibm9ybWFsIiBmb250LXN0eWxlPSJub3JtYWwiIHdpZHRoPSIxODIuMzA5NDAxMDc2NzU4NSI+dGltZXN0YW1wKCk8L3RleHQ+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMjQwKSI+PGc+PGxpbmUgeDE9IjAiIHkxPSI2MCIgeDI9IjE1MCIgeTI9IjYwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cG9seWxpbmUgcG9pbnRzPSIxNDAsNTQuMjI2NDk3MzA4MTAzNzQ1IDE1MCw2MCAxNDAsNjUuNzczNTAyNjkxODk2MjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzAgMCkiPjxlbGxpcHNlIGN4PSI2MCIgY3k9IjYwIiByeD0iNTkiIHJ5PSI1OSIgZmlsbD0iaHNsKDEwLCA2MCUsIDgwJSkiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjAiIHk9IjAiIGZpbGw9ImJsYWNrIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOHB4IiBmb250LXdlaWdodD0ibm9ybWFsIiBmb250LXN0eWxlPSJub3JtYWwiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYwIDYwKSI+eyB2YWx1ZTogYSwgLi4uIH08L3RleHQ+PC9nPjwvZz48L2c+PC9zdmc+"}}]);