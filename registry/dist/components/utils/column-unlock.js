!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/column-unlock"]=t():e["utils/column-unlock"]=t()}(globalThis,(()=>(()=>{"use strict";var e,t,o={356:e=>{e.exports=coreApis.style}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var c=n[e]={exports:{}};return o[e](c,c.exports,r),c.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var c=Object.create(null);r.r(c);var i={};e=e||[null,t({}),t([]),t(t)];for(var a=2&n&&o;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>i[e]=()=>o[e]));return i.default=()=>o,r.d(c,i),c},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return(()=>{r.d(c,{component:()=>a});const e=coreApis.componentApis.define;let t=!1,o=!0;const n="column-unlock",i=async()=>{o=!0;const{addStyle:e}=await Promise.resolve().then(r.t.bind(r,356,23));e(".article-holder { user-select: text !important }",n),t||(t=!0,document.addEventListener("copy",(e=>{o&&e.stopImmediatePropagation()}),{capture:!0}))},a=(0,e.defineComponentMetadata)({name:"columnUnlock",displayName:"专栏文字选择",entry:i,reload:i,unload:async()=>{document.getElementById(n)?.remove(),o=!1},tags:[componentsTags.utils],description:{"zh-CN":"使专栏的文字可以选择."},urlInclude:["//www.bilibili.com/read/"],commitHash:"fd37f297fdb2985b25a97e154e00dd39090a4da2",coreVersion:"2.5.2"})})(),c=c.component})()));