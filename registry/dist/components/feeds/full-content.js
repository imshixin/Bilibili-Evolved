!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["feeds/full-content"]=e():t["feeds/full-content"]=e()}(self,(function(){return function(){var t,e,n={521:function(t,e,n){var o=n(645)((function(t){return t[1]}));o.push([t.id,".card .main-content .expand-btn,\n.card .main-content .content-ellipsis {\n  display: none !important;\n}\n.card .main-content .content-full {\n  display: block !important;\n  height: auto !important;\n}",""]),t.exports=o},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var c=this[i][0];null!=c&&(r[c]=!0)}for(var u=0;u<t.length;u++){var f=[].concat(t[u]);o&&r[f[0]]||(n&&(f[2]?f[2]="".concat(n," and ").concat(f[2]):f[2]=n),e.push(f))}},e}},223:function(t,e,n){var o=n(521);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var c={};t=t||[null,e({}),e([]),e(e)];for(var u=2&o&&n;"object"==typeof u&&!~t.indexOf(u);u=e(u))Object.getOwnPropertyNames(u).forEach((function(t){c[t]=function(){return n[t]}}));return c.default=function(){return n},r.d(i,c),i},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return n}});var t=coreApis.componentApis.styledComponent,e=coreApis.utils.urls;const n={...(0,t.toggleStyle)("fullFeedsContent",(()=>Promise.resolve().then(r.t.bind(r,223,23)))),displayName:"展开动态内容",description:{"zh-CN":"不管内容多长, 总是完全展开动态的内容."},tags:[componentsTags.style,componentsTags.feeds],urlInclude:e.feedsUrlsWithoutDetail,commitHash:"beb7e234d20f9c9030dd1f3cde1e6ac9d88d4f8e",coreVersion:"2.1.5"}}(),i=i.component}()}));