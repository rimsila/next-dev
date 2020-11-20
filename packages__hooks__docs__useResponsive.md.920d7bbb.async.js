(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27,24],{"0Owb":function(e,n,t){"use strict";function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(this,arguments)}t.d(n,"a",(function(){return r}))},GvIC:function(e,n,t){"use strict";t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return p})),t.d(n,"a",(function(){return m.a}));var r,i=t("tJVT"),o=t("rAM+"),a=t("q1tI"),s=new Set,c={xs:{min:-1/0,max:576},sm:{min:576,max:768},md:{min:768,max:992},lg:{min:992,max:1200},xl:{min:1200,max:1600},xxl:{min:1600,max:1/0}};function u(){r||(r={size:{height:0,width:0},screen:"xs"},f(),window.addEventListener("resize",(()=>{var e=r;if(f(),e!==r){var n,t=Object(o["a"])(s);try{for(t.s();!(n=t.n()).done;){var i=n.value;i()}}catch(a){t.e(a)}finally{t.f()}}})))}function f(){for(var e,n=window.innerWidth,t=window.innerHeight,i={size:{width:n,height:t}},o=!1,a=0,s=Object.keys(c);a<s.length;a++){var u=s[a];if(e=c[u],n>=e.min&&n<e.max){i.screen=u,o=!0;break}}(o||i.size.width!==r.size.width||i.size.height!==r.size.height)&&(r=i)}function l(){u();var e=Object(a["useState"])(r),n=Object(i["a"])(e,2),t=n[0],o=n[1];return Object(a["useEffect"])((()=>{var e=()=>{o(r)};return s.add(e),()=>{s.delete(e)}}),[]),t}var d=t("kRpH"),m=t.n(d);function p(e,n){Object(a["useEffect"])((()=>{var t=m.a.subscribe(e,n);return()=>{m.a.unsubscribe(t)}}),[])}},"K+nK":function(e,n){function t(e){return e&&e.__esModule?e:{default:e}}e.exports=t},Qw5x:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}t.d(n,"a",(function(){return i}))},YuTi:function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},dCGT:function(e,n,t){"use strict";t.r(n);var r=t("0Owb"),i=t("q1tI"),o=t.n(i),a=(t("B2uJ"),t("+su7"),t("qOys")),s=t.n(a),c=t("5Yjd"),u=t.n(c),f=o.a.memo((function(){var e=t("K+nK"),n=e(t("q1tI")),r=e(t("fyFh")),i=function(){return n.default.createElement(r.default,null)};return n["default"].createElement(i)}));n["default"]=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"useresponsive-responsive"},o.a.createElement("a",{"aria-hidden":"true",href:"#useresponsive-responsive"},o.a.createElement("span",{className:"icon icon-link"})),"useResponsive-Responsive"),o.a.createElement("p",null,"Get responsive information."),o.a.createElement("h2",{id:"code-demo"},o.a.createElement("a",{"aria-hidden":"true",href:"#code-demo"},o.a.createElement("span",{className:"icon icon-link"})),"Code demo"),o.a.createElement("h3",{id:"get-responsive-information-in-components"},o.a.createElement("a",{"aria-hidden":"true",href:"#get-responsive-information-in-components"},o.a.createElement("span",{className:"icon icon-link"})),"Get responsive information in components")),o.a.createElement(u.a,Object(r["a"])({source:{tsx:"import React from 'react';\nimport { useResponsive } from '@wetrial/hooks';\n\n// configResponsive({\n//   small: 0,\n//   middle: 800,\n//   large: 1200,\n// });\n\nexport default () => {\n  const { screen, size } = useResponsive();\n  return (\n    <>\n      <p>Please change the width of the browser window to see the effect: </p>\n      <p>screen:{screen}</p>\n      <p>\n        height:{size.height},width:{size.width}\n      </p>\n    </>\n  );\n};\n",jsx:"import React from 'react';\nimport { useResponsive } from '@wetrial/hooks'; // configResponsive({\n//   small: 0,\n//   middle: 800,\n//   large: 1200,\n// });\n\nexport default () => {\n  const { screen, size } = useResponsive();\n  return (\n    <>\n      <p>Please change the width of the browser window to see the effect: </p>\n      <p>screen:{screen}</p>\n      <p>\n        height:{size.height},width:{size.width}\n      </p>\n    </>\n  );\n};\n"}},{path:"/_demos/use-responsive",dependencies:{},files:{}}),o.a.createElement(f,null)),o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"api"},o.a.createElement("a",{"aria-hidden":"true",href:"#api"},o.a.createElement("span",{className:"icon icon-link"})),"API"),o.a.createElement(s.a,{code:"interface ResponsiveInfo {\n  screen: string;\n  size: {\n    height: number;\n    width: number;\n  };\n}\nfunction useResponsive(): ResponsiveInfo;\n",lang:"typescript"}),o.a.createElement("h3",{id:"configuration"},o.a.createElement("a",{"aria-hidden":"true",href:"#configuration"},o.a.createElement("span",{className:"icon icon-link"})),"Configuration"),o.a.createElement("p",null,"The default responsive configuration and bootstrap is consistent:"),o.a.createElement(s.a,{code:"{\n    xs: {\n     min: -Infinity,\n     max: 576,\n   },\n   sm: {\n     min: 576,\n     max: 768,\n   },\n   md: {\n     min: 768,\n     max: 992,\n   },\n   lg: {\n     min: 992,\n     max: 1200,\n   },\n   xl: {\n     min: 1200,\n     max: 1600,\n   },\n   xxl: {\n     min: 1600,\n     max: +Infinity,\n   }\n}\n",lang:"javascript"})))}},fyFh:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),i=t.n(r),o=t("GvIC");n["default"]=()=>{var e=Object(o["b"])(),n=e.screen,t=e.size;return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Please change the width of the browser window to see the effect: "),i.a.createElement("p",null,"screen:",n),i.a.createElement("p",null,"height:",t.height,",width:",t.width))}},kRpH:function(e,n,t){(function(e){(function(t,r){"use strict";var i={};t.PubSub=i;var o=t.define;r(i),"function"===typeof o&&o.amd?o((function(){return i})):(void 0!==e&&e.exports&&(n=e.exports=i),n.PubSub=i,e.exports=n=i)})("object"===typeof window&&window||this,(function(e){"use strict";var n={},t=-1,r="*";function i(e){var n;for(n in e)if(e.hasOwnProperty(n))return!0;return!1}function o(e){return function(){throw e}}function a(e,n,t){try{e(n,t)}catch(r){setTimeout(o(r),0)}}function s(e,n,t){e(n,t)}function c(e,t,r,i){var o,c=n[t],u=i?s:a;if(n.hasOwnProperty(t))for(o in c)c.hasOwnProperty(o)&&u(c[o],e,r)}function u(e,n,t){return function(){var i=String(e),o=i.lastIndexOf(".");c(e,e,n,t);while(-1!==o)i=i.substr(0,o),o=i.lastIndexOf("."),c(e,i,n,t);c(e,r,n,t)}}function f(e){var t=String(e),r=Boolean(n.hasOwnProperty(t)&&i(n[t]));return r}function l(e){var n=String(e),t=f(n)||f(r),i=n.lastIndexOf(".");while(!t&&-1!==i)n=n.substr(0,i),i=n.lastIndexOf("."),t=f(n);return t}function d(e,n,t,r){e="symbol"===typeof e?e.toString():e;var i=u(e,n,r),o=l(e);return!!o&&(!0===t?i():setTimeout(i,0),!0)}e.publish=function(n,t){return d(n,t,!1,e.immediateExceptions)},e.publishSync=function(n,t){return d(n,t,!0,e.immediateExceptions)},e.subscribe=function(e,r){if("function"!==typeof r)return!1;e="symbol"===typeof e?e.toString():e,n.hasOwnProperty(e)||(n[e]={});var i="uid_"+String(++t);return n[e][i]=r,i},e.subscribeAll=function(n){return e.subscribe(r,n)},e.subscribeOnce=function(n,t){var r=e.subscribe(n,(function(){e.unsubscribe(r),t.apply(this,arguments)}));return e},e.clearAllSubscriptions=function(){n={}},e.clearSubscriptions=function(e){var t;for(t in n)n.hasOwnProperty(t)&&0===t.indexOf(e)&&delete n[t]},e.countSubscriptions=function(e){var t,r=0;for(t in n)n.hasOwnProperty(t)&&0===t.indexOf(e)&&r++;return r},e.getSubscriptions=function(e){var t,r=[];for(t in n)n.hasOwnProperty(t)&&0===t.indexOf(e)&&r.push(t);return r},e.unsubscribe=function(t){var r,i,o,a=function(e){var t;for(t in n)if(n.hasOwnProperty(t)&&0===t.indexOf(e))return!0;return!1},s="string"===typeof t&&(n.hasOwnProperty(t)||a(t)),c=!s&&"string"===typeof t,u="function"===typeof t,f=!1;if(!s){for(r in n)if(n.hasOwnProperty(r)){if(i=n[r],c&&i[t]){delete i[t],f=t;break}if(u)for(o in i)i.hasOwnProperty(o)&&i[o]===t&&(delete i[o],f=!0)}return f}e.clearSubscriptions(t)}}))}).call(this,t("YuTi")(e))},"rAM+":function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t("Qw5x");function i(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=Object(r["a"])(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==t["return"]||t["return"]()}finally{if(c)throw a}}}}},tJVT:function(e,n,t){"use strict";function r(e){if(Array.isArray(e))return e}function i(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(t.push(a.value),n&&t.length===n)break}catch(c){i=!0,o=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw o}}return t}}t.d(n,"a",(function(){return s}));var o=t("Qw5x");function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,n){return r(e)||i(e,n)||Object(o["a"])(e,n)||a()}}}]);