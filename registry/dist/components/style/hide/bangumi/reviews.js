!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/hide/bangumi/reviews"]=t():e["style/hide/bangumi/reviews"]=t()}(self,(function(){return function(){var e,t,n={418:function(e,t,n){var o=n(645)((function(e){return e[1]}));o.push([e.id,"#review_module {\n  display: none !important;\n}",""]),e.exports=o},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var u=this[i][0];null!=u&&(r[u]=!0)}for(var c=0;c<e.length;c++){var f=[].concat(e[c]);o&&r[f[0]]||(n&&(f[2]?f[2]="".concat(n," and ").concat(f[2]):f[2]=n),t.push(f))}},t}},481:function(e,t,n){var o=n(418);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={id:e,exports:{}};return n[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var u={};e=e||[null,t({}),t([]),t(t)];for(var c=2&o&&n;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(e){u[e]=function(){return n[e]}}));return u.default=function(){return n},r.d(i,u),i},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return n}});var e=coreApis.componentApis.styledComponent,t=coreApis.utils.urls;const n={displayName:"隐藏番剧点评",tags:[componentsTags.style],...(0,e.toggleStyle)("hideBangumiReviews",(()=>Promise.resolve().then(r.t.bind(r,481,23)))),urlInclude:t.bangumiUrls,description:{"zh-CN":"隐藏番剧播放页面里的点评板块."},commitHash:"beb7e234d20f9c9030dd1f3cde1e6ac9d88d4f8e",coreVersion:"2.1.5"}}(),i=i.component}()}));