(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[54],{K5JE:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),l=(t("B2uJ"),t("+su7"),t("qOys")),o=t.n(l);t("5Yjd");n["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"code-specification"},r.a.createElement("a",{"aria-hidden":"true",href:"#code-specification"},r.a.createElement("span",{className:"icon icon-link"})),"Code specification"),r.a.createElement("p",null,"A good code style can facilitate other developers to quickly become familiar with and get started with development work, and it is also convenient for themselves to quickly find and locate problems."),r.a.createElement("ul",null,r.a.createElement("li",null,"Module comments")),r.a.createElement(o.a,{code:"/**\n * Format date\n * @param  {string}  data   The date to format\n * @param  {format} [format='yyyy-MM-dd'] Format, the default is yyyy-MM-dd\n * @return {string}         Return the formatted string\n */\n",lang:"tsx"}),r.a.createElement("ul",null,r.a.createElement("li",null,"Business code comments")),r.a.createElement(o.a,{code:"/*Business code comments*/\n",lang:"tsx"}),r.a.createElement("ul",null,r.a.createElement("li",null,"Interface notes")),r.a.createElement(o.a,{code:"export interface IRouteMenu {\n  /**\n   *Route list\n   */\n  routes?: string[];\n}\n",lang:"tsx"}),r.a.createElement("h2",{id:"reference-component-order"},r.a.createElement("a",{"aria-hidden":"true",href:"#reference-component-order"},r.a.createElement("span",{className:"icon icon-link"})),"Reference component order"),r.a.createElement("p",null,"First reference the external component library, then reference the system-level global library (the outermost reference first), then reference the current component block-level component, and finally the css style"),r.a.createElement(o.a,{code:"import * as React from 'react';\nimport { Dropdown, Menu, Icon } from 'antd';\nimport { SelectPlus } from 'wetrial';\nimport ScrollBar from '@/components/ScrollBar';\nimport { IListProps } from './interface';\nimport styles from './index.less';\n",lang:"tsx"}),r.a.createElement("h2",{id:"quotation-marks"},r.a.createElement("a",{"aria-hidden":"true",href:"#quotation-marks"},r.a.createElement("span",{className:"icon icon-link"})),"quotation marks"),r.a.createElement("ul",null,r.a.createElement("li",null,"Use single quotes for constant strings"),r.a.createElement("li",null,"Use double quotes for properties in react components"),r.a.createElement("li",null,"Use es6 backticks for string splicing")),r.a.createElement("h2",{id:"indentation-semicolon"},r.a.createElement("a",{"aria-hidden":"true",href:"#indentation-semicolon"},r.a.createElement("span",{className:"icon icon-link"})),"Indentation, semicolon"),r.a.createElement("p",null,"A set of rules has been configured in the system, and the code will be automatically formatted when saving"),r.a.createElement("h2",{id:"brackets"},r.a.createElement("a",{"aria-hidden":"true",href:"#brackets"},r.a.createElement("span",{className:"icon icon-link"})),"brackets"),r.a.createElement("p",null,"There must be braces after the following keywords (even if the content of the code block is only one line)\uff09\uff1aif, else, for, while, do, switch, try, catch, finally, with"),r.a.createElement(o.a,{code:"// Not recommended\nif (condition) doSomething();\n\n// Recommended practice\nif (condition) {\n  doSomething();\n}\n",lang:"tsx"}),r.a.createElement("h2",{id:"array-object"},r.a.createElement("a",{"aria-hidden":"true",href:"#array-object"},r.a.createElement("span",{className:"icon icon-link"})),"Array, object"),r.a.createElement("ul",null,r.a.createElement("li",null,"Object attribute names do not need to be quoted"),r.a.createElement("li",null,"Objects are written in indented form, not on one line"),r.a.createElement("li",null,"Do not have a comma at the end of the array"),r.a.createElement("li",null,"No comma at the end of the object")),r.a.createElement("h2",{id:"naming"},r.a.createElement("a",{"aria-hidden":"true",href:"#naming"},r.a.createElement("span",{className:"icon icon-link"})),"Naming"),r.a.createElement("ul",null,r.a.createElement("li",null,"Class name: Big camel case style, letters and numbers, for example: AbcTest. Prohibit Chinese characters, special symbols, and non- big hump style"),r.a.createElement("li",null,"Function name, variable name: small camel case style, letters and numbers, for example: abcTest. Chinese characters, special symbols, non- little camel case styles are prohibited, such as snake_case, etc."),r.a.createElement("li",null,"Constant string: all uppercase style, uppercase letters, numbers and underscores, words are separated by underscores, for example: ABC_TEST. Chinese characters, special symbols, lowercase letters are prohibited"),r.a.createElement("li",null,"Component, page: folder big camel case style, file name (except index, layout) and others are all capitalized")),r.a.createElement(o.a,{code:"\u251c\u2500src\n\u2502  \u2502  app.ts\n\u2502  \u2502  defaultSettings.ts\n\u2502  \u2502  global.less\n\u2502  \u2502  global.tsx\n\u2502  \u2502  service-worker.ts\n\u2502  \u251c\u2500b-components\n\u2502  \u251c\u2500components\n\u2502  \u251c\u2500constants\n\u2502  \u2502      index.ts\n\u2502  \u2502      permissions.js\n\u2502  \u251c\u2500models\n\u2502  \u2502      user.ts\n\u2502  \u2502      global.ts\n\u2502  \u251c\u2500pages\n\u2502  \u2502  \u251c\u2500Example\n\u2502  \u2502  \u2502 \u251c\u2500List\n\u2502  \u2502  \u2502 \u2502 \u251c\u2500index.tsx\n\u2502  \u2502  \u2502 \u2502 \u251c\u2500model.ts\n\u2502  \u2502  \u2502 \u2502 \u251c\u2500service.ts\n\u2502  \u2502  \u2502 \u2502 \u251c\u2500View.tsx\n\u2502  \u251c\u2500services\n\u2502  \u2502      authority.test.ts\n\u2502  \u251c\u2500utils\n\u2502  \u2502      authority.test.ts\n\u2502  \u2502      authority.ts\n\u2514\u2500typings\n",lang:"bash"}),r.a.createElement("ul",null,r.a.createElement("li",null,"use callback attribute in the component: use onXxx")),r.a.createElement(o.a,{code:"<Button onClick={... }></Button>\n\n",lang:"tsx"}),r.a.createElement("ul",null,r.a.createElement("li",null,"onXXX bound events: use handleXXXX")),r.a.createElement(o.a,{code:"<Button onClick={this.handlePay}>Pay</Button>\n",lang:"tsx"}),r.a.createElement("p",null,"-The interface name with I in front of it means interface -Type naming signature with T to indicate Type -Use words of the form withXxx as the names of higher-level components"),r.a.createElement("h2",{id:"interface-declaration-order"},r.a.createElement("a",{"aria-hidden":"true",href:"#interface-declaration-order"},r.a.createElement("span",{className:"icon icon-link"})),"interface declaration order"),r.a.createElement("p",null,"There are four types that are frequently used daily. Read-only parameters are placed first, mandatory parameters are the second place, optional parameters are second, and uncertain parameters are placed last."),r.a.createElement(o.a,{code:"interface IProps {\n  readonly x: number;\n  readonly y: number;\n  name: string;\n  age: number;\n  height?: number;\n  [key: string]: string;\n}\n",lang:"tsx"}),r.a.createElement("h2",{id:"ts-useful-related-tools-generics"},r.a.createElement("a",{"aria-hidden":"true",href:"#ts-useful-related-tools-generics"},r.a.createElement("span",{className:"icon icon-link"})),"ts Useful related tools generics"),r.a.createElement("ul",null,r.a.createElement("li",null,"Record<string,any> use this to declare the type of object structure")),r.a.createElement(o.a,{code:"// Used to define a ts object, key is a string, value is any type\nconst people:Record<string,any> = {\n    name: 'chengfeng',\n    age: 10\n",lang:"tsx"}),r.a.createElement("ul",null,r.a.createElement("li",null,"Partial: Used to define a ts object, key is a string, value is any type")),r.a.createElement(o.a,{code:"interface IPeople {\n  title: string;\n  name: string;\n}\n// The defined structure can be any key of the interface IPeople\nconst people: Partial<IPeople> = {\n  title: 'test',\n};\n",lang:"tsx"}),r.a.createElement("ul",null,r.a.createElement("li",null,"Readonly The function is to change the passed attribute to read-only")),r.a.createElement(o.a,{code:"interface IPeople {\n    title: string;\n    name: string;\n}\n\n// title name the attribute is read-only\nconst people: Readonly<Todo> = {\n    title: 'test',\n    name: chenfeng;\n};\n",lang:"tsx"}),r.a.createElement("ul",null,r.a.createElement("li",null,"Required The function is to change the incoming attributes into mandatory options")),r.a.createElement(o.a,{code:"interface IPeople {\n  title?: string;\n  name?: string;\n}\nconst people: Required<IPeople> = { title: 'ts' }; // Error: property 'name' missing\n",lang:"tsx"}),r.a.createElement("blockquote",null,r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/Microsoft/TypeScript-Handbook/diffs/0?base_sha=22b37a2d8c9a1dd378795444baf954c2e7ecccf5&commentable=true&head_user=csantos42&pull_number=801&sha1=22b37a2d8c9a1dd378795444baf954c2e7ecccf5&sha2=9d4c56f5d414dbe23780719885baa3df40222412&short_path=0b2da51&unchanged=expanded&utf8=%E2%9C%93#requiredt",target:"_blank",rel:"noopener noreferrer"},"see more",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))))),r.a.createElement("h2",{id:"ts-some-useful-small-tips"},r.a.createElement("a",{"aria-hidden":"true",href:"#ts-some-useful-small-tips"},r.a.createElement("span",{className:"icon icon-link"})),"TS some useful small tips"),r.a.createElement("ul",null,r.a.createElement("li",null,"keyof")),r.a.createElement(o.a,{code:'interface IPeople {\n  name: string;\n  age: number;\n}\n\ntype T = keyof IPeople; // -> "name" | "age"\n',lang:"tsx"}),r.a.createElement("ul",null,r.a.createElement("li",null,"in")),r.a.createElement(o.a,{code:"type Keys = 'a' | 'b';\n\n// -> { a: any, b: any }\ntype Obj = { [p in Keys]: any };\n",lang:"tsx"}),r.a.createElement("h2",{id:"other-specifications"},r.a.createElement("a",{"aria-hidden":"true",href:"#other-specifications"},r.a.createElement("span",{className:"icon icon-link"})),"Other specifications"),r.a.createElement("ul",null,r.a.createElement("li",null,"Don't use var to declare variables"),r.a.createElement("li",null,"Variables that will not be modified use const declaration"),r.a.createElement("li",null,"Remove declared but unquoted code"),r.a.createElement("li",null,"Prohibit the use of debug in the code"),r.a.createElement("li",null,"No empty code blocks are allowed (it will be automatically removed when the code is saved)"),r.a.createElement("li",null,"Disable console.log debugging information")),r.a.createElement("h2",{id:"react-component-specification"},r.a.createElement("a",{"aria-hidden":"true",href:"#react-component-specification"},r.a.createElement("span",{className:"icon icon-link"})),"react component specification"),r.a.createElement("ul",null,r.a.createElement("li",null,"If you don\u2019t optimize the render performance yourself, try to use PureComponent instead of Component"),r.a.createElement("li",null,"Use functional components as much as possible for simple components, use useState, useEffect, etc.")),r.a.createElement("h2",{id:"calculate-data-in-render-as-much-as-possible-use-momoize-one"},r.a.createElement("a",{"aria-hidden":"true",href:"#calculate-data-in-render-as-much-as-possible-use-momoize-one"},r.a.createElement("span",{className:"icon icon-link"})),"Calculate data in render as much as possible, use momoize-One"),r.a.createElement(o.a,{code:"import memoizeOne from'memoize-one';\n...\n/**\n * Merge adjacent rows of the data source by key, and return the generated inter-row object. It is recommended to use memoizeOne for caching calls\n * @param list The list of data sources to be merged\n * @param key key\n * @example mergeCells([{name:'xxg',title:'code'},{name:'Andy Lau',title:'code'},{name:'\u53e4\u5929\u4e50',title:'other'}],' title')==>{0:2,1:0,2:1}\n */\nexport function mergeCells<T>(list: T[], key: string | ((item: T) => string)): IKeyValue {\n  const mergeObj = {};\n  let startIndex = 0;\n  list &&\n    list.forEach((item, index, arr) => {\n      let curValue;\n      let preValue;\n      if (typeof key ==='string') {\n        curValue = item[key];\n        preValue = arr[startIndex][key];\n      } else {\n        curValue = key(item);\n        preValue = key(arr[startIndex]);\n      }\n      mergeObj[index] = 0;\n      if (curValue === preValue) {\n        mergeObj[startIndex] += 1;\n      } else {\n        mergeObj[index] = 1;\n        startIndex = index;\n      }\n    });\n  return mergeObj;\n}\n\nconst editionDisplayNameMergeCell = memoizeOne(mergeCells);\n\n{\n  title:'Version',\n  dataIndex:'editionDisplayName',\n  render: (name, _, index) => {\n    const {\n      pagedData: {items },\n    } = this.props;\n    // Because render will be called frequently, the data source calculated here is basically fixed, so use the cache and repeat the call to get it from the cache.\n    const rowSpanMap = editionDisplayNameMergeCell(items,'editionDisplayName');\n\n    const obj = {\n      children: name,\n      props: {\n        rowSpan: rowSpanMap[index],\n      },\n    };\n    return obj;\n  },\n}\n",lang:"tsx"}),r.a.createElement("h2",{id:"function-to-remove-side-effects-in-componentwillunmount"},r.a.createElement("a",{"aria-hidden":"true",href:"#function-to-remove-side-effects-in-componentwillunmount"},r.a.createElement("span",{className:"icon icon-link"})),"Function to remove side effects in componentWillUnmount"),r.a.createElement("ul",null,r.a.createElement("li",null,"Clear EventListener"),r.a.createElement("li",null,"Abort data request"),r.a.createElement("li",null,"Clear timer")),r.a.createElement("h2",{id:"key-in-react"},r.a.createElement("a",{"aria-hidden":"true",href:"#key-in-react"},r.a.createElement("span",{className:"icon icon-link"})),"key in react"),r.a.createElement("ul",null,r.a.createElement("li",null,"For the key optimization in the component, maximize the reuse of dom"),r.a.createElement("li",null,"Try not to use index as a key")),r.a.createElement("h2",{id:"prevent-xss-attacks"},r.a.createElement("a",{"aria-hidden":"true",href:"#prevent-xss-attacks"},r.a.createElement("span",{className:"icon icon-link"})),"Prevent xss attacks"),r.a.createElement("ul",null,r.a.createElement("li",null,"Input, textarea and other tags, do not directly render html text directly on the page, use xssb to filter and then output to the tag;")),r.a.createElement(o.a,{code:"import {html2text} from'xss';\nrender(){\n  <div\n  dangerouslySetInnerHTML={{\n\n    __html: html2text(htmlContent)\n\n  }}\n/>\n}\n",lang:"tsx"}),r.a.createElement("h2",{id:"get-the-real-dom-in-the-component"},r.a.createElement("a",{"aria-hidden":"true",href:"#get-the-real-dom-in-the-component"},r.a.createElement("span",{className:"icon icon-link"})),"Get the real dom in the component"),r.a.createElement("ul",null,r.a.createElement("li",null,"Use the createRef() function after version 16")),r.a.createElement(o.a,{code:'class MyComponent extends React.Component<IProps, IState> {\n  private inputRef = React.createRef();\n\n  render() {\n    return <input type="text" ref={this.inputRef} />;\n  }\n\n  componentDidMount() {\n    this.inputRef.current.focus();\n  }\n}\n',lang:"tsx"}),r.a.createElement("h2",{id:"reduce-the-magic-number"},r.a.createElement("a",{"aria-hidden":"true",href:"#reduce-the-magic-number"},r.a.createElement("span",{className:"icon icon-link"})),"Reduce the magic number"),r.a.createElement("ul",null,r.a.createElement("li",null,"When writing code, try to reduce some numbers with unknown meanings and use enumerations as much as possible. For example, when type === 0, some operations are done to make people wonder why.")),r.a.createElement(o.a,{code:"if (type !== 0) {\n  // TODO\n}\n\n// good\nconst STATUS: Record<string, number> = {\n  READY: 0,\n  FETCHING: 1,\n  FAILED: 2,\n};\n\nif (type === STATUS.READY) {\n  // TODO\n}\n\n// best\nenum STATUS {\n  // Ready\n  READY = 0,\n  // Requesting\n  FETCHING = 1,\n  // Request failed\n  FAILED = 2,\n}\n",lang:"tsx"}),r.a.createElement("h2",{id:"event-event-object-type"},r.a.createElement("a",{"aria-hidden":"true",href:"#event-event-object-type"},r.a.createElement("span",{className:"icon icon-link"})),"Event event object type"),r.a.createElement("ul",null,r.a.createElement("li",null,"Many small partners have used ts for a long time and don't know the types of commonly used Event event objects:"),r.a.createElement("li",null,"ClipboardEvent<T = Element> clipboard event object"),r.a.createElement("li",null,"DragEvent<T = Element> drag event object"),r.a.createElement("li",null,"ChangeEvent<T = Element> Change event object"),r.a.createElement("li",null,"KeyboardEvent<T = Element> keyboard event object"),r.a.createElement("li",null,"MouseEvent<T = Element> mouse event object"),r.a.createElement("li",null,"TouchEvent<T = Element> touch event object"),r.a.createElement("li",null,"WheelEvent<T = Element> wheel event object"),r.a.createElement("li",null,"AnimationEvent<T = Element> animation event object"),r.a.createElement("li",null,"TransitionEvent<T = Element> transition event object")),r.a.createElement(o.a,{code:"import { MouseEvent } from 'react';\n\ninterface IProps {\n  onClick(event: MouseEvent<HTMLDivElement>): void;\n}\n",lang:"tsx"}),r.a.createElement("h2",{id:"use-private-attributes-instead-of-state"},r.a.createElement("a",{"aria-hidden":"true",href:"#use-private-attributes-instead-of-state"},r.a.createElement("span",{className:"icon icon-link"})),"Use private attributes instead of state"),r.a.createElement("p",null,"-For some state properties that do not need to control the ui, we can directly bind to this, which is a private property. There is no need to get this.state, otherwise it will trigger the rendering mechanism and cause performance waste. For example, when requesting page data, we Will have a variable"),r.a.createElement(o.a,{code:"// bad\nstate: IState = {\n  pageNo:1,\n  pageSize: 10\n};\n\n// good\nqueryParams: Record<string, any> = {\n  pageNo:1,\n  pageSize: 10\n}\n\n",lang:"tsx"}),r.a.createElement("h2",{id:"code-fine-grained-thinking"},r.a.createElement("a",{"aria-hidden":"true",href:"#code-fine-grained-thinking"},r.a.createElement("span",{className:"icon icon-link"})),"Code fine-grained thinking"),r.a.createElement("p",null,"When writing components or functions, tool functions and business logic are separated, form verification and business are separated, event functions and business are separated, and ajax and business are separated. For example, some pages are redirected through location.href, and some of our business logic is placed in didMount. However, if you need to change later, you may need to use react-router to jump. There may be a lot of logic to be changed, so the function If you pull it out, you need to update less code. If you are still not sure how to divide the fine-grained function, I have a suggestion. Code that has been used more than twice, components or functions need to be separated, and the code that is used twice is not required"),r.a.createElement("h2",{id:"can-not-be-mounted-inside-the-load-component-try-not-to-put-it-inside-the-component"},r.a.createElement("a",{"aria-hidden":"true",href:"#can-not-be-mounted-inside-the-load-component-try-not-to-put-it-inside-the-component"},r.a.createElement("span",{className:"icon icon-link"})),"Can not be mounted inside the load component, try not to put it inside the component"),r.a.createElement(o.a,{code:"// bad\nrenderHeader = () => {\n  return (<div />)\n}\nrenderBody = () => {\n  return (<div />)\n}\nrenderFooter = () => {\n  return (<div />)\n}\nrender(){\n  return(\n    <div>\n      renderHeader()\n      renderBody()\n      renderFooter()\n    </div>\n  )\n}\n\n// good\nfunction RenderHeader(props) =  {\n  return (<div />)\n}\nfunction RenderBody(props) =  {\n  return (<div />)\n}\nfunction RenderFooter(props) =  {\n  return (<div />)\n}\nclass Component extends React.Component<iProps, iState>{\n  render () {\n    return(\n      <div>\n        <RenderHeader />\n        <RenderBody />\n        <RenderFooter />\n      </div>\n    )\n  }\n}\n",lang:"tsx"})))}}}]);