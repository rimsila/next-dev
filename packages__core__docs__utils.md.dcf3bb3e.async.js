(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{pqdI:function(e,t,l){"use strict";l.r(t);var a=l("q1tI"),n=l.n(a),r=(l("B2uJ"),l("+su7"),l("qOys")),c=l.n(r);l("5Yjd");t["default"]=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"utils-auxiliary-methods"},n.a.createElement("a",{"aria-hidden":"true",href:"#utils-auxiliary-methods"},n.a.createElement("span",{className:"icon icon-link"})),"utils-auxiliary methods"),n.a.createElement("p",null,"Provide common auxiliary methods"),n.a.createElement("h2",{id:"how-to-use"},n.a.createElement("a",{"aria-hidden":"true",href:"#how-to-use"},n.a.createElement("span",{className:"icon icon-link"})),"How to use"),n.a.createElement(c.a,{code:"import { isPromise } from '@wetrial/core/es/utils';\n\nconst isP = isPromise(()=>{\n    return new Promise(resolve=>{\n        resolve(1)\n    });\n}));\n",lang:"tsx"}),n.a.createElement("h2",{id:"methods"},n.a.createElement("a",{"aria-hidden":"true",href:"#methods"},n.a.createElement("span",{className:"icon icon-link"})),"Methods"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Type"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"urlToList"),n.a.createElement("td",null,"Convert routing to list form"),n.a.createElement("td",null,n.a.createElement("code",null,"(url?:string)=>string[]"))),n.a.createElement("tr",null,n.a.createElement("td",null,"isPromise"),n.a.createElement("td",null,"Determine whether it is a Promise object"),n.a.createElement("td",null,n.a.createElement("code",null,"(obj)=>boolean"))),n.a.createElement("tr",null,n.a.createElement("td",null,"isUrl"),n.a.createElement("td",null,"Determine whether it is a legal url"),n.a.createElement("td",null,n.a.createElement("code",null,"(path:string)=>boolean"))),n.a.createElement("tr",null,n.a.createElement("td",null,"getQuery"),n.a.createElement("td",null,"Get query string"),n.a.createElement("td",null,n.a.createElement("code",null,"(query?:string)=>Object"))),n.a.createElement("tr",null,n.a.createElement("td",null,"isBrowser"),n.a.createElement("td",null,"Determine whether it is a browser environment"),n.a.createElement("td",null,n.a.createElement("code",null,"()=>boolean"))),n.a.createElement("tr",null,n.a.createElement("td",null,"listToFlat"),n.a.createElement("td",null,"Convert list dictionary to object"),n.a.createElement("td",null,n.a.createElement("code",null,"(any[])=>Object"))),n.a.createElement("tr",null,n.a.createElement("td",null,"getDateString"),n.a.createElement("td",null,"Date format, in the format of moment"),n.a.createElement("td",null,n.a.createElement("code",null,"(","{","date,format","}",")=>string"))),n.a.createElement("tr",null,n.a.createElement("td",null,"fixedZero"),n.a.createElement("td",null,"Less than two digits complement 0"),n.a.createElement("td",null,n.a.createElement("code",null,"(val:number)=>string"))),n.a.createElement("tr",null,n.a.createElement("td",null,"newGuid"),n.a.createElement("td",null,"Generate a guid"),n.a.createElement("td",null,n.a.createElement("code",null,"(withSplit?:boolean)=>string"))),n.a.createElement("tr",null,n.a.createElement("td",null,"formatSecuredInfo"),n.a.createElement("td",null,"Code display"),n.a.createElement("td",null,n.a.createElement("code",null,"(text,type,filterNA?)=>string"))),n.a.createElement("tr",null,n.a.createElement("td",null,"mergeCells"),n.a.createElement("td",null,"Merging adjacent rows of the data source by key and returning the generated inter-row objects. It is recommended to use memoizeOne for caching calls"),n.a.createElement("td",null,"-"))))))}}}]);