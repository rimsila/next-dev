---
title: Code specification
order: 1
group:
  title: Team style
  path: /standard
  order: 1
nav:
  title: Front-end best practices
  path: /doc
  order: 100
---

# Code specification

A good code style can facilitate other developers to quickly become familiar with and get started with development work, and it is also convenient for themselves to quickly find and locate problems.

<!-- ## Comment

- Notes at the top of the file, including description, author, date

```tsx | pure
/**
 * @desc 描述改文件的用途
 * @create xxg
 * @createdDate 2019-09-09
 */
``` -->

- Module comments

```tsx | pure
/**
 * Format date
 * @param  {string}  data   The date to format
 * @param  {format} [format='yyyy-MM-dd'] Format, the default is yyyy-MM-dd
 * @return {string}         Return the formatted string
 */
```

- Business code comments

```tsx | pure
/*Business code comments*/
```

- Interface notes

```tsx | pure
export interface IRouteMenu {
  /**
   *Route list
   */
  routes?: string[];
}
```

## Reference component order

First reference the external component library, then reference the system-level global library (the outermost reference first), then reference the current component block-level component, and finally the css style

```tsx | pure
import * as React from 'react';
import { Dropdown, Menu, Icon } from 'antd';
import { SelectPlus } from 'wetrial';
import ScrollBar from '@/components/ScrollBar';
import { IListProps } from './interface';
import styles from './index.less';
```

## quotation marks

- Use single quotes for constant strings
- Use double quotes for properties in react components
- Use es6 backticks for string splicing

## Indentation, semicolon

A set of rules has been configured in the system, and the code will be automatically formatted when saving

## brackets

There must be braces after the following keywords (even if the content of the code block is only one line)）：if, else, for, while, do, switch, try, catch, finally, with

```tsx | pure
// Not recommended
if (condition) doSomething();

// Recommended practice
if (condition) {
  doSomething();
}
```

## Array, object

- Object attribute names do not need to be quoted
- Objects are written in indented form, not on one line
- Do not have a comma at the end of the array
- No comma at the end of the object

## Naming

- Class name: Big camel case style, letters and numbers, for example: AbcTest. Prohibit Chinese characters, special symbols, and non- big hump style
- Function name, variable name: small camel case style, letters and numbers, for example: abcTest. Chinese characters, special symbols, non- little camel case styles are prohibited, such as snake_case, etc.
- Constant string: all uppercase style, uppercase letters, numbers and underscores, words are separated by underscores, for example: ABC_TEST. Chinese characters, special symbols, lowercase letters are prohibited
- Component, page: folder big camel case style, file name (except index, layout) and others are all capitalized

```bash
├─src
│  │  app.ts
│  │  defaultSettings.ts
│  │  global.less
│  │  global.tsx
│  │  service-worker.ts
│  ├─b-components
│  ├─components
│  ├─constants
│  │      index.ts
│  │      permissions.js
│  ├─models
│  │      user.ts
│  │      global.ts
│  ├─pages
│  │  ├─Example
│  │  │ ├─List
│  │  │ │ ├─index.tsx
│  │  │ │ ├─model.ts
│  │  │ │ ├─service.ts
│  │  │ │ ├─View.tsx
│  ├─services
│  │      authority.test.ts
│  ├─utils
│  │      authority.test.ts
│  │      authority.ts
└─typings
```

- use callback attribute in the component: use onXxx

```tsx | pure
<Button onClick={... }></Button>

```

- onXXX bound events: use handleXXXX

```tsx | pure
<Button onClick={this.handlePay}>Pay</Button>
```

-The interface name with I in front of it means interface -Type naming signature with T to indicate Type -Use words of the form withXxx as the names of higher-level components

## interface declaration order

There are four types that are frequently used daily. Read-only parameters are placed first, mandatory parameters are the second place, optional parameters are second, and uncertain parameters are placed last.

```tsx | pure
interface IProps {
  readonly x: number;
  readonly y: number;
  name: string;
  age: number;
  height?: number;
  [key: string]: string;
}
```

## ts Useful related tools generics

- Record<string,any> use this to declare the type of object structure

```tsx | pure
// Used to define a ts object, key is a string, value is any type
const people:Record<string,any> = {
    name: 'chengfeng',
    age: 10
```

- Partial: Used to define a ts object, key is a string, value is any type

```tsx | pure
interface IPeople {
  title: string;
  name: string;
}
// The defined structure can be any key of the interface IPeople
const people: Partial<IPeople> = {
  title: 'test',
};
```

- Readonly The function is to change the passed attribute to read-only

```tsx | pure
interface IPeople {
    title: string;
    name: string;
}

// title name the attribute is read-only
const people: Readonly<Todo> = {
    title: 'test',
    name: chenfeng;
};
```

- Required The function is to change the incoming attributes into mandatory options

```tsx | pure
interface IPeople {
  title?: string;
  name?: string;
}
const people: Required<IPeople> = { title: 'ts' }; // Error: property 'name' missing
```

> [see more](https://github.com/Microsoft/TypeScript-Handbook/diffs/0?base_sha=22b37a2d8c9a1dd378795444baf954c2e7ecccf5&commentable=true&head_user=csantos42&pull_number=801&sha1=22b37a2d8c9a1dd378795444baf954c2e7ecccf5&sha2=9d4c56f5d414dbe23780719885baa3df40222412&short_path=0b2da51&unchanged=expanded&utf8=%E2%9C%93#requiredt)

## TS some useful small tips

- keyof

```tsx | pure
interface IPeople {
  name: string;
  age: number;
}

type T = keyof IPeople; // -> "name" | "age"
```

- in

```tsx | pure
type Keys = 'a' | 'b';

// -> { a: any, b: any }
type Obj = { [p in Keys]: any };
```

## Other specifications

- Don't use var to declare variables
- Variables that will not be modified use const declaration
- Remove declared but unquoted code
- Prohibit the use of debug in the code
- No empty code blocks are allowed (it will be automatically removed when the code is saved)
- Disable console.log debugging information

## react component specification

- If you don’t optimize the render performance yourself, try to use PureComponent instead of Component
- Use functional components as much as possible for simple components, use useState, useEffect, etc.

## Calculate data in render as much as possible, use momoize-One

```tsx | pure
import memoizeOne from'memoize-one';
...
/**
 * Merge adjacent rows of the data source by key, and return the generated inter-row object. It is recommended to use memoizeOne for caching calls
 * @param list The list of data sources to be merged
 * @param key key
 * @example mergeCells([{name:'xxg',title:'code'},{name:'Andy Lau',title:'code'},{name:'古天乐',title:'other'}],' title')==>{0:2,1:0,2:1}
 */
export function mergeCells<T>(list: T[], key: string | ((item: T) => string)): IKeyValue {
  const mergeObj = {};
  let startIndex = 0;
  list &&
    list.forEach((item, index, arr) => {
      let curValue;
      let preValue;
      if (typeof key ==='string') {
        curValue = item[key];
        preValue = arr[startIndex][key];
      } else {
        curValue = key(item);
        preValue = key(arr[startIndex]);
      }
      mergeObj[index] = 0;
      if (curValue === preValue) {
        mergeObj[startIndex] += 1;
      } else {
        mergeObj[index] = 1;
        startIndex = index;
      }
    });
  return mergeObj;
}

const editionDisplayNameMergeCell = memoizeOne(mergeCells);

{
  title:'Version',
  dataIndex:'editionDisplayName',
  render: (name, _, index) => {
    const {
      pagedData: {items },
    } = this.props as any;
    // Because render will be called frequently, the data source calculated here is basically fixed, so use the cache and repeat the call to get it from the cache.
    const rowSpanMap = editionDisplayNameMergeCell(items,'editionDisplayName');

    const obj = {
      children: name,
      props: {
        rowSpan: rowSpanMap[index],
      },
    };
    return obj;
  },
}
```

## Function to remove side effects in componentWillUnmount

- Clear EventListener
- Abort data request
- Clear timer

## key in react

- For the key optimization in the component, maximize the reuse of dom
- Try not to use index as a key

## Prevent xss attacks

- Input, textarea and other tags, do not directly render html text directly on the page, use xssb to filter and then output to the tag;

```tsx | pure
import {html2text} from'xss';
render(){
  <div
  dangerouslySetInnerHTML={{

    __html: html2text(htmlContent)

  }}
/>
}
```

## Get the real dom in the component

- Use the createRef() function after version 16

```tsx | pure
class MyComponent extends React.Component<IProps, IState> {
  private inputRef = React.createRef();

  render() {
    return <input type="text" ref={this.inputRef} />;
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }
}
```

## Reduce the magic number

- When writing code, try to reduce some numbers with unknown meanings and use enumerations as much as possible. For example, when type === 0, some operations are done to make people wonder why.

```tsx | pure
if (type !== 0) {
  // TODO
}

// good
const STATUS: Record<string, number> = {
  READY: 0,
  FETCHING: 1,
  FAILED: 2,
};

if (type === STATUS.READY) {
  // TODO
}

// best
enum STATUS {
  // Ready
  READY = 0,
  // Requesting
  FETCHING = 1,
  // Request failed
  FAILED = 2,
}
```

## Event event object type

- Many small partners have used ts for a long time and don't know the types of commonly used Event event objects:
- ClipboardEvent<T = Element> clipboard event object
- DragEvent<T = Element> drag event object
- ChangeEvent<T = Element> Change event object
- KeyboardEvent<T = Element> keyboard event object
- MouseEvent<T = Element> mouse event object
- TouchEvent<T = Element> touch event object
- WheelEvent<T = Element> wheel event object
- AnimationEvent<T = Element> animation event object
- TransitionEvent<T = Element> transition event object

```tsx | pure
import { MouseEvent } from 'react';

interface IProps {
  onClick(event: MouseEvent<HTMLDivElement>): void;
}
```

## Use private attributes instead of state

-For some state properties that do not need to control the ui, we can directly bind to this, which is a private property. There is no need to get this.state, otherwise it will trigger the rendering mechanism and cause performance waste. For example, when requesting page data, we Will have a variable

```tsx | pure
// bad
state: IState = {
  pageNo:1,
  pageSize: 10
};

// good
queryParams: Record<string, any> = {
  pageNo:1,
  pageSize: 10
}

```

## Code fine-grained thinking

When writing components or functions, tool functions and business logic are separated, form verification and business are separated, event functions and business are separated, and ajax and business are separated. For example, some pages are redirected through location.href, and some of our business logic is placed in didMount. However, if you need to change later, you may need to use react-router to jump. There may be a lot of logic to be changed, so the function If you pull it out, you need to update less code. If you are still not sure how to divide the fine-grained function, I have a suggestion. Code that has been used more than twice, components or functions need to be separated, and the code that is used twice is not required

## Can not be mounted inside the load component, try not to put it inside the component

```tsx | pure
// bad
renderHeader = () => {
  return (<div />)
}
renderBody = () => {
  return (<div />)
}
renderFooter = () => {
  return (<div />)
}
render(){
  return(
    <div>
      renderHeader()
      renderBody()
      renderFooter()
    </div>
  )
}

// good
function RenderHeader(props) =  {
  return (<div />)
}
function RenderBody(props) =  {
  return (<div />)
}
function RenderFooter(props) =  {
  return (<div />)
}
class Component extends React.Component<iProps, iState>{
  render () {
    return(
      <div>
        <RenderHeader />
        <RenderBody />
        <RenderFooter />
      </div>
    )
  }
}
```
