---
title: typescript knowledge
order: 5
group:
  title: Tutorial
  path: /course
  order: 4
nav:
  title: Front-end best practices
  path: /doc
  order: 100
---

# typescript knowledge

## Type definition

## array

## tuple

## Optional parameters

## Union Type

-| -&

## Class, inheritance, private, public, protection

## Type constraints

## Interface

## System Type

## Generic

-Type annotation and compile-time type checking -Type inference -Type erasure -Interface -Enumeration -Mixin -Generic programming -Namespace -Tuple -Await

Using TypeScript will be more friendly to the IDE. If you are developing with vscode, your development experience will be significantly improved. Based on the characteristics of umi, we can easily use it in Pro. Pro comes with the configuration files required by TypeScript.

-tsconfig.js -tslint.json

tsconfig will declare that this is a TypeScript project, in which some configuration will be done. For details, please see [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html). tslint is similar to eslint, which will check your code. In order to improve the experience, you can install the tslint plugin of vscode together. Next, we just need to create a new tsx file directly to start TypeScript development.

### common problem

#### Use in css-module

Since Pro uses css-module, you may need

```tsx |pure
import style from './index.style.less';
```

At this time typescript will report an error, you can use

```tsx |pure
const style = require('./index.less');
```

Avoid this problem. There are many related discussions in the community, there is no best way for the time being, only the relatively perfect [typings-for-css-modules-loader](https://github.com/Jimdo/typings-for-css-modules-loader), Similarly, importing images, css, svg can also avoid type checking in this way.

#### Form.create()

Using Form.create() in TypeScript may throw an error similar to the following:

```tsx |pure
error TS2339: Property'loading' does not exist on type'IntrinsicAttributes & IntrinsicClassAttributes<Compone
nt<{}, ComponentState>> & Readonly<{ childr...'.

```

This is because the type of props did not pass the check, the following is the correct way

```tsx |pure
import {FormComponentProps} from "antd/lib/form/Form";

interface IFormComponentProps extends FormComponentProps {
  test: string;
}

class FormComponent extends React.Component<IFormComponentProps> {
  constructor(props: IFormComponentProps) {
    super(props);
    ....
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    return ....;
  }
}
```

#### Warehouse without description file

In the actual use of some libraries, there is no relevant d.ts. At this time, we can directly define it in the used file, taking the Gaode map as an example.

```tsx |pure
import React from 'react';

// Define the type of Map
declare class GaoDeAMap {
  constructor(container: HTMLElement, option: { center: [number, number]; zoom: number });
  public destroy(): void;
}

// Define the global AMap
declare const AMap: {
  Map: typeof GaoDeAMap;
};

// tslint:disable-next-line:max-classes-per-file
class MapComponent extends React.Component {
  public mapDom: HTMLDivElement;
  public map: GaoDeAMap;
  public componentDidMount() {
    const map = new AMap.Map(this.mapDom, {
      center: [117.000923, 36.675807],
      zoom: 11,
    });
    this.map = map;
  }
  public componentWillUnmount() {
    this.map.destroy();
  }
  public render() {
    return <div ref={(ref) => (this.mapDom = ref)} />;
  }
}

export default MapComponent;
```

If you want to use it multiple times, you can create a namespace,

```ts
declare namespace AMap {
  class Map {
    constructor(
      container: HTMLElement,
      option: {center: [number, number]; zoom: number}
    )
    public destroy(): void
  }
}

export = AMap
export as namespace
```

Then it can be directly introduced in the project.

```tsx |pure
import AMapInterface from'./AMap';
`
declare const AMap: typeof AMapInterface;
```
