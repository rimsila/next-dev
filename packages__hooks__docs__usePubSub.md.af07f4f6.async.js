(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[65,61],{"0Owb":function(e,n,t){"use strict";function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},a.apply(this,arguments)}t.d(n,"a",(function(){return a}))},FBPY:function(e,n,t){"use strict";t.r(n);var a=t("PArb"),s=t("BMrR"),r=t("2/Rp"),u=t("kPKH"),l=t("5rEg"),c=t("KrTs"),i=t("tJVT"),o=t("q1tI"),m=t.n(o),d=t("GvIC"),b={sendMessage:"sendMessage"};function p(){var e=Object(o["useState"])(""),n=Object(i["a"])(e,2),t=n[0],a=n[1];return Object(d["c"])(b.sendMessage,((e,n)=>{a(n)})),m.a.createElement(m.a.Fragment,null,m.a.createElement(c["a"],{dot:!0},"\u6d88\u606f"),m.a.createElement(l["a"].TextArea,{value:t}))}function g(){var e=Object(o["useState"])(""),n=Object(i["a"])(e,2),t=n[0],a=n[1],c=e=>{e.preventDefault(),d["a"].publish(b.sendMessage,"".concat(t,"-").concat((new Date).getTime())),a("")};return m.a.createElement(l["a"].Group,null,m.a.createElement(s["a"],null,m.a.createElement(u["a"],{span:22},m.a.createElement(l["a"],{value:t,onChange:e=>{a(e.target.value)},defaultValue:"receive"})),m.a.createElement(u["a"],{span:2},m.a.createElement(r["a"],{onClick:c,type:"primary"},"\u53d1\u9001"))))}n["default"]=()=>m.a.createElement(m.a.Fragment,null,m.a.createElement(p,null),m.a.createElement(a["a"],null),m.a.createElement(g,null))},GvIC:function(e,n,t){"use strict";t.d(n,"b",(function(){return m})),t.d(n,"c",(function(){return p})),t.d(n,"a",(function(){return b.a}));var a,s=t("tJVT"),r=t("rAM+"),u=t("q1tI"),l=new Set,c={xs:{min:-1/0,max:576},sm:{min:576,max:768},md:{min:768,max:992},lg:{min:992,max:1200},xl:{min:1200,max:1600},xxl:{min:1600,max:1/0}};function i(){a||(a={size:{height:0,width:0},screen:"xs"},o(),window.addEventListener("resize",(()=>{var e=a;if(o(),e!==a){var n,t=Object(r["a"])(l);try{for(t.s();!(n=t.n()).done;){var s=n.value;s()}}catch(u){t.e(u)}finally{t.f()}}})))}function o(){for(var e,n=window.innerWidth,t=window.innerHeight,s={size:{width:n,height:t}},r=!1,u=0,l=Object.keys(c);u<l.length;u++){var i=l[u];if(e=c[i],n>=e.min&&n<e.max){s.screen=i,r=!0;break}}(r||s.size.width!==a.size.width||s.size.height!==a.size.height)&&(a=s)}function m(){i();var e=Object(u["useState"])(a),n=Object(s["a"])(e,2),t=n[0],r=n[1];return Object(u["useEffect"])((()=>{var e=()=>{r(a)};return l.add(e),()=>{l.delete(e)}}),[]),t}var d=t("kRpH"),b=t.n(d);function p(e,n){Object(u["useEffect"])((()=>{var t=b.a.subscribe(e,n);return()=>{b.a.unsubscribe(t)}}),[])}},"K+nK":function(e,n){function t(e){return e&&e.__esModule?e:{default:e}}e.exports=t},f6G0:function(e,n,t){"use strict";t.r(n);var a=t("0Owb"),s=t("q1tI"),r=t.n(s),u=(t("B2uJ"),t("+su7"),t("qOys")),l=t.n(u),c=t("5Yjd"),i=t.n(c),o=r.a.memo((function(){var e=t("K+nK"),n=e(t("q1tI")),a=e(t("FBPY")),s=function(){return n.default.createElement(a.default,null)};return n["default"].createElement(s)}));n["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"usepubsub-publish-and-subscribe"},r.a.createElement("a",{"aria-hidden":"true",href:"#usepubsub-publish-and-subscribe"},r.a.createElement("span",{className:"icon icon-link"})),"usePubSub-Publish and Subscribe"),r.a.createElement("p",null,"Event notification between multiple components can sometimes be a headache. With PubSub, this process can be made easier."),r.a.createElement("p",null,"Call ",r.a.createElement("code",null,"useSubscribe")," in the component to subscribe to an event (the component will automatically unsubscribe when it is consumed)"),r.a.createElement("p",null,"An event can be published through ",r.a.createElement("code",null,"PubSub.publish")),r.a.createElement("p",null,"If necessary, you can use ",r.a.createElement("code",null,"PubSub.publish")," and ",r.a.createElement("code",null,"PubSub.subscribe")," to subscribe and publish in non-components (Note: If you own PubSub.subscribe, please pay attention to call ",r.a.createElement("code",null,"PubSub.unsubscribe")," to cancel subscription)"),r.a.createElement(l.a,{code:"useSubscribe(event:string,(event:string,data:any)=>void);\n",lang:"js"}),r.a.createElement("blockquote",null,r.a.createElement("p",null,"When the component is rendered multiple times, the return value obtained by calling ",r.a.createElement("code",null,"useSubscribe")," for each rendering will remain unchanged and will not be subscribed repeatedly.")),r.a.createElement(l.a,{code:"PubSub.publish((event: string), (data: any));\n",lang:"js"}),r.a.createElement("p",null,"For the case of ",r.a.createElement("strong",null,"child component")," notifying ",r.a.createElement("strong",null,"parent component"),", we still recommend using ",r.a.createElement("code",null,"props")," to pass an ",r.a.createElement("code",null,"event")," function directly. ",r.a.createElement("code",null,"useSubscribe")," is suitable for event notifications between components that are ",r.a.createElement("strong",null,"far away"),", or to share event notifications between ",r.a.createElement("strong",null,"multiple")," components."),r.a.createElement("h2",{id:"code-demo"},r.a.createElement("a",{"aria-hidden":"true",href:"#code-demo"},r.a.createElement("span",{className:"icon icon-link"})),"Code Demo"),r.a.createElement("h3",{id:"child-component-publish-parent-component-subscribe"},r.a.createElement("a",{"aria-hidden":"true",href:"#child-component-publish-parent-component-subscribe"},r.a.createElement("span",{className:"icon icon-link"})),"Child component publish parent component subscribe")),r.a.createElement(i.a,Object(a["a"])({source:{tsx:"import React, { useState } from 'react';\nimport { Button, Input, Badge, Divider, Row, Col } from 'antd';\nimport { PubSub, useSubscribe } from '@wetrial/hooks';\n\nconst eventType = {\n  sendMessage: 'sendMessage',\n};\n\nfunction MessageList() {\n  const [messages, setMessages] = useState('');\n\n  useSubscribe(eventType.sendMessage, (_, data) => {\n    setMessages(data);\n  });\n\n  return (\n    <>\n      <Badge dot>\u6d88\u606f</Badge>\n      <Input.TextArea value={messages} />\n    </>\n  );\n}\n\nfunction Chat() {\n  const [message, setMessage] = useState('');\n\n  const sendMessage = (e) => {\n    e.preventDefault();\n    PubSub.publish(eventType.sendMessage, `${message}-${new Date().getTime()}`);\n    setMessage('');\n  };\n\n  return (\n    <Input.Group>\n      <Row>\n        <Col span={22}>\n          <Input\n            value={message}\n            onChange={(e) => {\n              setMessage(e.target.value);\n            }}\n            defaultValue=\"receive\"\n          />\n        </Col>\n        <Col span={2}>\n          <Button onClick={sendMessage} type=\"primary\">\n            \u53d1\u9001\n          </Button>\n        </Col>\n      </Row>\n    </Input.Group>\n  );\n}\n\nexport default () => {\n  return (\n    <>\n      <MessageList />\n      <Divider />\n      <Chat />\n    </>\n  );\n};\n",jsx:"import React, { useState } from 'react';\nimport { Button, Input, Badge, Divider, Row, Col } from 'antd';\nimport { PubSub, useSubscribe } from '@wetrial/hooks';\nconst eventType = {\n  sendMessage: 'sendMessage',\n};\n\nfunction MessageList() {\n  const [messages, setMessages] = useState('');\n  useSubscribe(eventType.sendMessage, (_, data) => {\n    setMessages(data);\n  });\n  return (\n    <>\n      <Badge dot>\u6d88\u606f</Badge>\n      <Input.TextArea value={messages} />\n    </>\n  );\n}\n\nfunction Chat() {\n  const [message, setMessage] = useState('');\n\n  const sendMessage = (e) => {\n    e.preventDefault();\n    PubSub.publish(eventType.sendMessage, `${message}-${new Date().getTime()}`);\n    setMessage('');\n  };\n\n  return (\n    <Input.Group>\n      <Row>\n        <Col span={22}>\n          <Input\n            value={message}\n            onChange={(e) => {\n              setMessage(e.target.value);\n            }}\n            defaultValue=\"receive\"\n          />\n        </Col>\n        <Col span={2}>\n          <Button onClick={sendMessage} type=\"primary\">\n            \u53d1\u9001\n          </Button>\n        </Col>\n      </Row>\n    </Input.Group>\n  );\n}\n\nexport default () => {\n  return (\n    <>\n      <MessageList />\n      <Divider />\n      <Chat />\n    </>\n  );\n};\n"}},{path:"/_demos/use-pub-sub",CSSInDependencies:["antd/dist/antd.css"],dependencies:{react:">=16.9.0","react-dom":">=16.9.0",antd:"4.8.4"},files:{}}),r.a.createElement(o,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement("a",{"aria-hidden":"true",href:"#api"},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(l.a,{code:"import {usePublish, PubSub} from'@wetrial/hooks';\n\nuseSubscribe(event:string,(event:string,data:any)=>void);\nPubSub.publish(event:string,data:any);\n",lang:"typescript"})))}}}]);