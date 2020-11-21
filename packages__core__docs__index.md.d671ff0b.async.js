(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{DQSG:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=(n("B2uJ"),n("+su7"),n("qOys")),o=n.n(r);n("5Yjd");t["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"request---\u8bf7\u6c42\u5e93"},l.a.createElement("a",{"aria-hidden":"true",href:"#request---\u8bf7\u6c42\u5e93"},l.a.createElement("span",{className:"icon icon-link"})),"request - \u8bf7\u6c42\u5e93"),l.a.createElement("p",null,"\u63d0\u4f9b ajax \u8bf7\u6c42\u7684\u5c01\u88c5,\u5305\u62ec\u8bf7\u6c42\u62e6\u622a\u3001\u54cd\u5e94\u62e6\u622a\u3001\u5f02\u5e38\u5904\u7406\u7b49(\u4e0d\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528)"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u901a\u5e38\u4f1a\u5728\u9879\u76ee\u4e2d\u63d0\u53d6\u4e00\u5c42\uff0c\u5982:src/utils/request.ts")),l.a.createElement(o.a,{code:"import {\n  addRequestInterceptor,\n  addResponseInterceptor,\n  commonRequestInterceptor,\n  commonResponseInterceptor,\n} from '@wetrial/core/es/request';\n\n// \u6dfb\u52a0\u8bf7\u6c42\u62e6\u622a\u5668(\u81ea\u52a8\u5e26\u4e0aAuthority\u8bf7\u6c42\u5934)\naddRequestInterceptor(...commonRequestInterceptor);\n// \u6dfb\u52a0\u54cd\u5e94\u62e6\u622a\u5668(\u5904\u7406tip\u3001\u5168\u5c40\u9519\u8bef\u7b49)\naddResponseInterceptor(...commonResponseInterceptor);\n\nexport { request, get, post, put, patch } from '@wetrial/core';\n",lang:"ts"}),l.a.createElement("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u4f7f\u7528\u65b9\u5f0f"},l.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528\u65b9\u5f0f"),l.a.createElement(o.a,{code:"import { get, post, request } from '@/utils/request';\n\nconst result = await get('');\n",lang:"tsx"}),l.a.createElement("h2",{id:"methods"},l.a.createElement("a",{"aria-hidden":"true",href:"#methods"},l.a.createElement("span",{className:"icon icon-link"})),"Methods"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u540d\u79f0"),l.a.createElement("th",null,"\u63cf\u8ff0"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null)),l.a.createElement("p",null,"| post | \u53d1\u9001 post \u8bf7\u6c42\uff0c\u8fd4\u56de Promise \u7c7b\u578b\u7684\u6cdb\u578b T\uff0c",l.a.createElement("a",{href:"#irequestoption"},"IRequestOption")," | ",l.a.createElement("code",null,"(opt:IRequestOption):Promise<T>")," | | put | \u53d1\u9001 put \u8bf7\u6c42\uff0c\u8fd4\u56de Promise \u7c7b\u578b\u7684\u6cdb\u578b T\uff0c",l.a.createElement("a",{href:"#irequestoption"},"IRequestOption")," | ",l.a.createElement("code",null,"(opt:IRequestOption):Promise<T>")," | | del | \u53d1\u9001 delete \u8bf7\u6c42\uff0c\u8fd4\u56de Promise \u7c7b\u578b\u7684\u6cdb\u578b T\uff0c",l.a.createElement("a",{href:"#irequestoption"},"IRequestOption")," | ",l.a.createElement("code",null,"(opt:IRequestOption):Promise<T>")," | | patch | \u53d1\u9001 patch \u8bf7\u6c42\uff0c\u8fd4\u56de Promise \u7c7b\u578b\u7684\u6cdb\u578b T\uff0c",l.a.createElement("a",{href:"#irequestoption"},"IRequestOption")," | ",l.a.createElement("code",null,"(opt:IRequestOption):Promise<T>")," | | request | \u5404\u7c7b\u8bf7\u6c42\u7684\u57fa\u7c7b\uff0cget\u3001post\u3001put\u3001del\u3001patch \u90fd\u662f\u5728\u8be5\u65b9\u6cd5\u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u6269\u5c55\u7684(\u6bd4\u5982\u8bbe\u7f6e method) | ",l.a.createElement("code",null,"(opt:IRequestOption):Promise<T>")," | | instance | axios \u7684\u5b9e\u4f8b | | | commonRequestInterceptor | \u901a\u7528\u8bf7\u6c42\u62e6\u622a\u5668\uff0c\u4f1a\u5c06 getToken \u83b7\u53d6\u5230\u7684\u503c\u8bbe\u7f6e\u5230\u8bf7\u6c42\u5934\u7684 Authorization | | | commonResponseInterceptor | \u901a\u7528\u54cd\u5e94\u62e6\u622a\u5668\uff0c\u4f1a\u5904\u7406",l.a.createElement("code",null,"showTip"),"\u3001\u672a\u6388\u6743\u8bf7\u6c42\u3001\u6570\u636e\u8f6c\u6362\u7b49 | | | addRequestInterceptor | \u6dfb\u52a0\u8bf7\u6c42\u62e6\u622a\u5668 | | | ejectRequestInterceptor | \u5220\u9664\u8bf7\u6c42\u62e6\u622a\u5668 | | | addResponseInterceptor | \u6dfb\u52a0\u54cd\u5e94\u62e6\u622a\u5668 | | | ejectResponseInterceptor | \u5220\u9664\u54cd\u5e94\u62e6\u622a\u5668 | | | configGlobalHeader | \u7528\u4e8e\u914d\u7f6e\u5168\u5c40\u6dfb\u52a0\u7684\u8bf7\u6c42\u5934,\u4e00\u6b21\u914d\u7f6e\u6240\u6709\u8bf7\u6c42\u751f\u6548 | |"),l.a.createElement("h3",{id:"irequestoption"},l.a.createElement("a",{"aria-hidden":"true",href:"#irequestoption"},l.a.createElement("span",{className:"icon icon-link"})),"IRequestOption"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"successTip"),l.a.createElement("td",null,"\u662f\u5426\u663e\u793a\u64cd\u4f5c\u6210\u529f\u7684\u63d0\u793a"),l.a.createElement("td",null,"boolean?"),l.a.createElement("td",null,"get \u8bf7\u6c42 false,\u5176\u4ed6 true")),l.a.createElement("tr",null,l.a.createElement("td",null,"url"),l.a.createElement("td",null,"\u8bf7\u6c42\u7684 url \u5730\u5740"),l.a.createElement("td",null,"string"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"method"),l.a.createElement("td",null,"\u8bf7\u6c42\u7684 method,\u53ef\u4ee5\u901a\u8fc7\u6269\u5c55\u65b9\u6cd5\u6bd4\u5982\uff0cpost \u4e0d\u9700\u8981\u63d0\u4f9b\u8be5\u53c2\u6570"),l.a.createElement("td",null,"string? 'post'\u3001'get'\u3001'put','delete','patch'"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("a",{href:"https://github.com/axios/axios#request-config",target:"_blank",rel:"noopener noreferrer"},"\u66f4\u591a\u914d\u7f6e",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null,"-")))),l.a.createElement("h4",{id:"commonrequestinterceptor"},l.a.createElement("a",{"aria-hidden":"true",href:"#commonrequestinterceptor"},l.a.createElement("span",{className:"icon icon-link"})),"commonRequestInterceptor"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4f1a\u5c06 configGlobalHeader \u4e2d\u53cd\u56de\u7684\u503c\u8bbe\u7f6e\u5230 headers \u4e2d\u53bb"),l.a.createElement("li",null,"\u4f1a\u81ea\u52a8\u6dfb\u52a0 Authorization \u8bf7\u6c42\u5934,\u4f1a\u8c03\u7528 authority \u4e2d\u7684 getToken \u65b9\u6cd5\u83b7\u53d6 token \u503c"),l.a.createElement("li",null,"\u6839\u636e\u914d\u7f6e\u662f\u5426\u52a0\u5bc6\u6765\u5bf9\u8bf7\u6c42\u5185\u5bb9\u8fdb\u884c\u52a0\u5bc6\u4ee5\u53ca\u89e3\u5bc6\u7684\u5bc6\u94a5\u4ee5\u8bf7\u6c42\u5934\u7684\u5f62\u5f0f\u4f20\u9012\u7ed9\u540e\u7aef")),l.a.createElement("h4",{id:"commonresponseinterceptor"},l.a.createElement("a",{"aria-hidden":"true",href:"#commonresponseinterceptor"},l.a.createElement("span",{className:"icon icon-link"})),"commonResponseInterceptor"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6839\u636e\u914d\u7f6e\u53c2\u6570 successTip \u5f39\u6210\u529f\u63d0\u793a"),l.a.createElement("li",null,"\u6839\u636e\u914d\u7f6e\u7684\u52a0\u5bc6\u6765\u89e3\u5bc6\u54cd\u5e94\u5185\u5bb9"),l.a.createElement("li",null,"\u5904\u7406\u975e 200-302 \u7684\u8bf7\u6c42\u8fdb\u5165\u5f02\u5e38\u5904\u7406"))))}}}]);