!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.app=t():e.app=t()}(this,(function(){return(()=>{var e={203:function(e,t,r){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||o(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),t.jsx=void 0,n(r(210),t);var u=r(726);Object.defineProperty(t,"jsx",{enumerable:!0,get:function(){return u.createElement}})},726:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createElement=void 0,t.createElement=function(e,t){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];return{tag:e,props:t||{},children:r||[]}}},210:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StoreModule=t.createStore=t.App=void 0,t.App=function(e){return function(t){return{store:e,render:t}}},t.createStore=function(e){return{modules:e}};var o=r(178);Object.defineProperty(t,"StoreModule",{enumerable:!0,get:function(){return o.StoreModule}})},178:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StoreModule=void 0;var o=r(802);t.StoreModule=function(){var e=this;this.key=o.uid(),this.data={},this.computed={},this.addData=function(t){var r=o.uid();return e.data[r]={key:r,value:t},{key:r,set:function(){console.log("set")},update:function(){console.log("update")}}},this.get=function(t){return{key:e.data[t.key].key}}}},805:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var o=r(203),n=new o.StoreModule,u=(0,o.createStore)([n]),i=n.addData,a=n.get,c=i("Hello world"),d=a(c);const s=(0,o.jsx)("h1",{onClick:function(){return c.set("Work")}},d),f=(0,o.App)(u)(s)},802:(e,t)=>{for(var r,o=256,n=[];o--;)n[o]=(o+256).toString(16).substring(1);t.uid=function(e){var t=0,u=e||11;if(!r||o+u>512)for(r="",o=0;t<256;t++)r+=n[256*Math.random()|0];return r.substring(o,o+++u)}}},t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,r),n.exports}return r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(805)})()}));