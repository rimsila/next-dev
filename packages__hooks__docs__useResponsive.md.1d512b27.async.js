(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[65,63],{BsWD:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("a3WO");function a(e,n){if(e){if("string"===typeof e)return Object(r["a"])(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(r["a"])(e,n):void 0}}},DSFK:function(e,n,t){"use strict";function r(e){if(Array.isArray(e))return e}t.d(n,"a",(function(){return r}))},ODXe:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("DSFK");function a(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done);r=!0)if(t.push(o.value),n&&t.length===n)break}catch(c){a=!0,i=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(a)throw i}}return t}}var i=t("BsWD"),o=t("PYwp");function s(e,n){return Object(r["a"])(e)||a(e,n)||Object(i["a"])(e,n)||Object(o["a"])()}},PYwp:function(e,n,t){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.d(n,"a",(function(){return r}))},TqRt:function(e,n){function t(e){return e&&e.__esModule?e:{default:e}}e.exports=t},a3WO:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,"a",(function(){return r}))},dCGT:function(e,n,t){"use strict";t.r(n);var r=t("wx14"),a=t("q1tI"),i=t.n(a),o=(t("B2uJ"),t("+su7"),t("qOys")),s=t.n(o),c=t("5Yjd"),u=t.n(c),l=i.a.memo((function(){var e=t("TqRt"),n=e(t("q1tI")),r=e(t("fyFh")),a=function(){return n.default.createElement(r.default,null)};return n["default"].createElement(a)}));n["default"]=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"markdown"},i.a.createElement("h1",{id:"useresponsive-responsive"},i.a.createElement("a",{"aria-hidden":"true",href:"#useresponsive-responsive"},i.a.createElement("span",{className:"icon icon-link"})),"useResponsive-Responsive"),i.a.createElement("p",null,"Get responsive information."),i.a.createElement("h2",{id:"code-demo"},i.a.createElement("a",{"aria-hidden":"true",href:"#code-demo"},i.a.createElement("span",{className:"icon icon-link"})),"Code demo"),i.a.createElement("h3",{id:"get-responsive-information-in-components"},i.a.createElement("a",{"aria-hidden":"true",href:"#get-responsive-information-in-components"},i.a.createElement("span",{className:"icon icon-link"})),"Get responsive information in components")),i.a.createElement(u.a,Object(r["a"])({source:{tsx:"import React from 'react';\nimport { useResponsive } from '@wetrial/hooks';\n\n// configResponsive({\n//   small: 0,\n//   middle: 800,\n//   large: 1200,\n// });\n\nexport default () => {\n  const { screen, size } = useResponsive();\n  return (\n    <>\n      <p>Please change the width of the browser window to see the effect: </p>\n      <p>screen:{screen}</p>\n      <p>\n        height:{size.height},width:{size.width}\n      </p>\n    </>\n  );\n};\n",jsx:"import React from 'react';\nimport { useResponsive } from '@wetrial/hooks'; // configResponsive({\n//   small: 0,\n//   middle: 800,\n//   large: 1200,\n// });\n\nexport default () => {\n  const { screen, size } = useResponsive();\n  return (\n    <>\n      <p>Please change the width of the browser window to see the effect: </p>\n      <p>screen:{screen}</p>\n      <p>\n        height:{size.height},width:{size.width}\n      </p>\n    </>\n  );\n};\n"}},{path:"/_demos/use-responsive",dependencies:{},files:{}}),i.a.createElement(l,null)),i.a.createElement("div",{className:"markdown"},i.a.createElement("h2",{id:"api"},i.a.createElement("a",{"aria-hidden":"true",href:"#api"},i.a.createElement("span",{className:"icon icon-link"})),"API"),i.a.createElement(s.a,{code:"interface ResponsiveInfo {\n  screen: string;\n  size: {\n    height: number;\n    width: number;\n  };\n}\nfunction useResponsive(): ResponsiveInfo;\n",lang:"typescript"}),i.a.createElement("h3",{id:"configuration"},i.a.createElement("a",{"aria-hidden":"true",href:"#configuration"},i.a.createElement("span",{className:"icon icon-link"})),"Configuration"),i.a.createElement("p",null,"The default responsive configuration and bootstrap is consistent:"),i.a.createElement(s.a,{code:"{\n    xs: {\n     min: -Infinity,\n     max: 576,\n   },\n   sm: {\n     min: 576,\n     max: 768,\n   },\n   md: {\n     min: 768,\n     max: 992,\n   },\n   lg: {\n     min: 992,\n     max: 1200,\n   },\n   xl: {\n     min: 1200,\n     max: 1600,\n   },\n   xxl: {\n     min: 1600,\n     max: +Infinity,\n   }\n}\n",lang:"javascript"})))}},fyFh:function(e,n,t){"use strict";t.r(n);var r,a=t("q1tI"),i=t.n(a),o=t("ODXe"),s=t("uFwe"),c=new Set,u={xs:{min:-1/0,max:576},sm:{min:576,max:768},md:{min:768,max:992},lg:{min:992,max:1200},xl:{min:1200,max:1600},xxl:{min:1600,max:1/0}};function l(){r||(r={size:{height:0,width:0},screen:"xs"},m(),window.addEventListener("resize",(()=>{var e=r;if(m(),e!==r){var n,t=Object(s["a"])(c);try{for(t.s();!(n=t.n()).done;){var a=n.value;a()}}catch(i){t.e(i)}finally{t.f()}}})))}function m(){for(var e,n=window.innerWidth,t=window.innerHeight,a={size:{width:n,height:t}},i=!1,o=0,s=Object.keys(u);o<s.length;o++){var c=s[o];if(e=u[c],n>=e.min&&n<e.max){a.screen=c,i=!0;break}}(i||a.size.width!==r.size.width||a.size.height!==r.size.height)&&(r=a)}function f(){l();var e=Object(a["useState"])(r),n=Object(o["a"])(e,2),t=n[0],i=n[1];return Object(a["useEffect"])((()=>{var e=()=>{i(r)};return c.add(e),()=>{c.delete(e)}}),[]),t}n["default"]=()=>{var e=f(),n=e.screen,t=e.size;return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Please change the width of the browser window to see the effect: "),i.a.createElement("p",null,"screen:",n),i.a.createElement("p",null,"height:",t.height,",width:",t.width))}},uFwe:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("BsWD");function a(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=Object(r["a"])(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return s=e.done,e},e:function(e){c=!0,o=e},f:function(){try{s||null==t["return"]||t["return"]()}finally{if(c)throw o}}}}}}]);