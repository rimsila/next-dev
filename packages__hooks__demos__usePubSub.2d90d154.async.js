(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{FBPY:function(e,t,a){"use strict";a.r(t);a("/zsF");var n=a("PArb"),r=(a("14J3"),a("BMrR")),c=(a("+L6B"),a("2/Rp")),i=(a("jCWc"),a("kPKH")),s=(a("5NDa"),a("5rEg")),u=(a("Awhp"),a("KrTs")),l=a("tJVT"),m=a("q1tI"),d=a.n(m),o=a("GvIC"),f={sendMessage:"sendMessage"};function v(){var e=Object(m["useState"])(""),t=Object(l["a"])(e,2),a=t[0],n=t[1];return Object(o["c"])(f.sendMessage,((e,t)=>{n(t)})),d.a.createElement(d.a.Fragment,null,d.a.createElement(u["a"],{dot:!0},"\u6d88\u606f"),d.a.createElement(s["a"].TextArea,{value:a}))}function b(){var e=Object(m["useState"])(""),t=Object(l["a"])(e,2),a=t[0],n=t[1],u=e=>{e.preventDefault(),o["a"].publish(f.sendMessage,"".concat(a,"-").concat((new Date).getTime())),n("")};return d.a.createElement(s["a"].Group,null,d.a.createElement(r["a"],null,d.a.createElement(i["a"],{span:22},d.a.createElement(s["a"],{value:a,onChange:e=>{n(e.target.value)},defaultValue:"receive"})),d.a.createElement(i["a"],{span:2},d.a.createElement(c["a"],{onClick:u,type:"primary"},"\u53d1\u9001"))))}t["default"]=()=>d.a.createElement(d.a.Fragment,null,d.a.createElement(v,null),d.a.createElement(n["a"],null),d.a.createElement(b,null))},GvIC:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return v})),a.d(t,"a",(function(){return f.a}));var n,r=a("tJVT"),c=a("rAM+"),i=a("q1tI"),s=new Set,u={xs:{min:-1/0,max:576},sm:{min:576,max:768},md:{min:768,max:992},lg:{min:992,max:1200},xl:{min:1200,max:1600},xxl:{min:1600,max:1/0}};function l(){n||(n={size:{height:0,width:0},screen:"xs"},m(),window.addEventListener("resize",(()=>{var e=n;if(m(),e!==n){var t,a=Object(c["a"])(s);try{for(a.s();!(t=a.n()).done;){var r=t.value;r()}}catch(i){a.e(i)}finally{a.f()}}})))}function m(){for(var e,t=window.innerWidth,a=window.innerHeight,r={size:{width:t,height:a}},c=!1,i=0,s=Object.keys(u);i<s.length;i++){var l=s[i];if(e=u[l],t>=e.min&&t<e.max){r.screen=l,c=!0;break}}(c||r.size.width!==n.size.width||r.size.height!==n.size.height)&&(n=r)}function d(){l();var e=Object(i["useState"])(n),t=Object(r["a"])(e,2),a=t[0],c=t[1];return Object(i["useEffect"])((()=>{var e=()=>{c(n)};return s.add(e),()=>{s.delete(e)}}),[]),a}var o=a("kRpH"),f=a.n(o);function v(e,t){Object(i["useEffect"])((()=>{var a=f.a.subscribe(e,t);return()=>{f.a.unsubscribe(a)}}),[])}}}]);