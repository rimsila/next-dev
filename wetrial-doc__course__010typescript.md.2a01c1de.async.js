(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47],{vMrA:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),i=(t("B2uJ"),t("+su7"),t("qOys")),o=t.n(i);t("5Yjd");n["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"typescript-knowledge"},r.a.createElement("a",{"aria-hidden":"true",href:"#typescript-knowledge"},r.a.createElement("span",{className:"icon icon-link"})),"typescript knowledge"),r.a.createElement("h2",{id:"type-definition"},r.a.createElement("a",{"aria-hidden":"true",href:"#type-definition"},r.a.createElement("span",{className:"icon icon-link"})),"Type definition"),r.a.createElement("h2",{id:"array"},r.a.createElement("a",{"aria-hidden":"true",href:"#array"},r.a.createElement("span",{className:"icon icon-link"})),"array"),r.a.createElement("h2",{id:"tuple"},r.a.createElement("a",{"aria-hidden":"true",href:"#tuple"},r.a.createElement("span",{className:"icon icon-link"})),"tuple"),r.a.createElement("h2",{id:"optional-parameters"},r.a.createElement("a",{"aria-hidden":"true",href:"#optional-parameters"},r.a.createElement("span",{className:"icon icon-link"})),"Optional parameters"),r.a.createElement("h2",{id:"union-type"},r.a.createElement("a",{"aria-hidden":"true",href:"#union-type"},r.a.createElement("span",{className:"icon icon-link"})),"Union Type"),r.a.createElement("p",null,"-| -&"),r.a.createElement("h2",{id:"class-inheritance-private-public-protection"},r.a.createElement("a",{"aria-hidden":"true",href:"#class-inheritance-private-public-protection"},r.a.createElement("span",{className:"icon icon-link"})),"Class, inheritance, private, public, protection"),r.a.createElement("h2",{id:"type-constraints"},r.a.createElement("a",{"aria-hidden":"true",href:"#type-constraints"},r.a.createElement("span",{className:"icon icon-link"})),"Type constraints"),r.a.createElement("h2",{id:"interface"},r.a.createElement("a",{"aria-hidden":"true",href:"#interface"},r.a.createElement("span",{className:"icon icon-link"})),"Interface"),r.a.createElement("h2",{id:"system-type"},r.a.createElement("a",{"aria-hidden":"true",href:"#system-type"},r.a.createElement("span",{className:"icon icon-link"})),"System Type"),r.a.createElement("h2",{id:"generic"},r.a.createElement("a",{"aria-hidden":"true",href:"#generic"},r.a.createElement("span",{className:"icon icon-link"})),"Generic"),r.a.createElement("p",null,"-Type annotation and compile-time type checking -Type inference -Type erasure -Interface -Enumeration -Mixin -Generic programming -Namespace -Tuple -Await"),r.a.createElement("p",null,"Using TypeScript will be more friendly to the IDE. If you are developing with vscode, your development experience will be significantly improved. Based on the characteristics of umi, we can easily use it in Pro. Pro comes with the configuration files required by TypeScript."),r.a.createElement("p",null,"-tsconfig.js -tslint.json"),r.a.createElement("p",null,"tsconfig will declare that this is a TypeScript project, in which some configuration will be done. For details, please see ",r.a.createElement("a",{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",target:"_blank",rel:"noopener noreferrer"},"here",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))),". tslint is similar to eslint, which will check your code. In order to improve the experience, you can install the tslint plugin of vscode together. Next, we just need to create a new tsx file directly to start TypeScript development."),r.a.createElement("h3",{id:"common-problem"},r.a.createElement("a",{"aria-hidden":"true",href:"#common-problem"},r.a.createElement("span",{className:"icon icon-link"})),"common problem"),r.a.createElement("h4",{id:"use-in-css-module"},r.a.createElement("a",{"aria-hidden":"true",href:"#use-in-css-module"},r.a.createElement("span",{className:"icon icon-link"})),"Use in css-module"),r.a.createElement("p",null,"Since Pro uses css-module, you may need"),r.a.createElement(o.a,{code:"import style from './index.style.less';\n",lang:"tsx"}),r.a.createElement("p",null,"At this time typescript will report an error, you can use"),r.a.createElement(o.a,{code:"const style = require('./index.less');\n",lang:"tsx"}),r.a.createElement("p",null,"Avoid this problem. There are many related discussions in the community, there is no best way for the time being, only the relatively perfect ",r.a.createElement("a",{href:"https://github.com/Jimdo/typings-for-css-modules-loader",target:"_blank",rel:"noopener noreferrer"},"typings-for-css-modules-loader",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))),", Similarly, importing images, css, svg can also avoid type checking in this way."),r.a.createElement("h4",{id:"formcreate"},r.a.createElement("a",{"aria-hidden":"true",href:"#formcreate"},r.a.createElement("span",{className:"icon icon-link"})),"Form.create()"),r.a.createElement("p",null,"Using Form.create() in TypeScript may throw an error similar to the following:"),r.a.createElement(o.a,{code:"error TS2339: Property'loading' does not exist on type'IntrinsicAttributes & IntrinsicClassAttributes<Compone\nnt<{}, ComponentState>> & Readonly<{ childr...'.\n\n",lang:"tsx"}),r.a.createElement("p",null,"This is because the type of props did not pass the check, the following is the correct way"),r.a.createElement(o.a,{code:'import {FormComponentProps} from "antd/lib/form/Form";\n\ninterface IFormComponentProps extends FormComponentProps {\n  test: string;\n}\n\nclass FormComponent extends React.Component<IFormComponentProps> {\n  constructor(props: IFormComponentProps) {\n    super(props);\n    ....\n  }\n  render() {\n    const {getFieldDecorator} = this.props.form;\n    return ....;\n  }\n}\n',lang:"tsx"}),r.a.createElement("h4",{id:"warehouse-without-description-file"},r.a.createElement("a",{"aria-hidden":"true",href:"#warehouse-without-description-file"},r.a.createElement("span",{className:"icon icon-link"})),"Warehouse without description file"),r.a.createElement("p",null,"In the actual use of some libraries, there is no relevant d.ts. At this time, we can directly define it in the used file, taking the Gaode map as an example."),r.a.createElement(o.a,{code:"import React from 'react';\n\n// Define the type of Map\ndeclare class GaoDeAMap {\n  constructor(container: HTMLElement, option: { center: [number, number]; zoom: number });\n  public destroy(): void;\n}\n\n// Define the global AMap\ndeclare const AMap: {\n  Map: typeof GaoDeAMap;\n};\n\n// tslint:disable-next-line:max-classes-per-file\nclass MapComponent extends React.Component {\n  public mapDom: HTMLDivElement;\n  public map: GaoDeAMap;\n  public componentDidMount() {\n    const map = new AMap.Map(this.mapDom, {\n      center: [117.000923, 36.675807],\n      zoom: 11,\n    });\n    this.map = map;\n  }\n  public componentWillUnmount() {\n    this.map.destroy();\n  }\n  public render() {\n    return <div ref={(ref) => (this.mapDom = ref)} />;\n  }\n}\n\nexport default MapComponent;\n",lang:"tsx"}),r.a.createElement("p",null,"If you want to use it multiple times, you can create a namespace,"),r.a.createElement(o.a,{code:"declare namespace AMap {\n  class Map {\n    constructor(\n      container: HTMLElement,\n      option: {center: [number, number]; zoom: number}\n    )\n    public destroy(): void\n  }\n}\n\nexport = AMap\nexport as namespace\n",lang:"ts"}),r.a.createElement("p",null,"Then it can be directly introduced in the project."),r.a.createElement(o.a,{code:"import AMapInterface from'./AMap';\n`\ndeclare const AMap: typeof AMapInterface;\n",lang:"tsx"})))}}}]);