---
title: React basics
order: 4
group:
  title: Tutorial
  path: /course
  order: 4
nav:
  title: Front-end best practices
  path: /doc
  order: 100
---

# React basics

### FC(Hook)

Functional Components(FC) vs Class: There are three different ways to create React Component, `React.createClass` is ES5 it's hard to code, then React release new `class` and `Stateless Functional Component` to use With Es6 it more easier. But for now class component become rarely use instead by `Stateless Functional Component`. because of React release new feature call hook. What is different between `Class and Stateless`. Notice that `Stateless Functional Component` is not a Object, it's functional programming, a pure function, `without state` but after release hook we can use `state inside it`, but still no use `this` keyword and something relate with class.

To define `App Component` for instance:

- Functional Component with state hook (it have many style type in FC component)

- `function JS style`

```javascript
function App() {
  return <div>Hello FC</div>;
}
```

- JS `Es6 style`

```javascript
const App = () => {
  return <div>Hello FC ES6</div>;
};
```

- JS `Es6 style with without {}` it is es6 shorthand

```javascript
const App = () => <div>Hello FC ES6</div>;
```

### Class Component:

```javascript
class App extends React.Component {
  this.state ={
    name: "Jonh"
  }
  handleClick() {
   this.state({
     name:"Sila"
   })
  }

  render() {
    return <div onClick={this.handleClick.bind(this)}>${this.props.name}</div>;
  }
}
```

### JSX

#### Component Composition

Similar to HTML tag, Components can be nested in JSX.

```html
<App>
  <header />
  <MainContent />
  <footer />
</App>
```

#### Note: React Component support only one html element

- `Error case`

```javascript
const App = () => {
  return (
    //it have two element div cause the error in jsx
    <div>Hello FC ES6</div>;
    <div>Hello FC ES6</div>;
  )
};
```

- `Correct case`

```javascript

const App = () => {
  return (
    <div> // it can be any element or wrapped to one element
      <div>Hello FC ES6</div>;
      <div>Hello FC ES6</div>;
    <div>
  )
};
```

- `Better case` use Fragment to reduce useless div

```javascript
const App = () => {
  return (
    <> //<> it's Fragment shorthand of <React.Fragment> also can use key in full Fragment
      <div>Hello FC ES6</div>;
      <div>Hello FC ES6</div>;
    </>
  )
};
```

#### className

Please beware using `className` instead of `class` for JSX styling, as `class` is preserved in JavaScript.

```html
<h1 className="fancy">Hello React</h1>
```
#### JavaScript Expressions

JavaScript expressions are wrapped inside pairs of curly brackets`{}` for JSX, it will execute and return.

For example:

```javascript
<h1>{this.props.title}</h1>
```

#### Mapping Arrays to JSX

Here is a way to map an array to JSX:

```javascript
<ul>
  {this.props.todos.map((todo, i) => (
    <li key={i}>{todo}</li>
  ))}
</ul>
```

#### Comments in JSX

Avoid using `//` for single line comments.

```javascript
<h1>
  {/* multiline comment */}
  {/*
    multi
    line
    comment
    */}
  {
    // single line
  }
  Hello
</h1>
```

#### Spread Attributes

A quite useful feature that JSX borrowed from ECMAScript6, using Spread Operator to extend Component's props.

For instance:

```javascript
const attrs = {
  href: 'http://example.org',
  target: '_blank',
};
<a {...attrs}>Hello</a>;
```

Equivalents to:

```javascript
const attrs = {
  href: 'http://example.org',
  target: '_blank',
};
<a href={attrs.href} target={attrs.target}>
  Hello
</a>;
```

### Props

Data handling is a key concept in React and it can be overwhelming for beginners. Data handles through `props`, `state` or `context` in React. But when using `redux`, all you need is just `props`, one of strengths that redux provides over React.

```javascript
//component function
function App(props) {
  const { name="Jonh" } = props || {}; // Destructing from props and || for prevent empty data cause error
  // Jonh is Default value of props name
  return <div>Hello {name}</div>;
}

//used component normal style
<App name="Sila">
//output: Hello Sila

```

#### propTypes

Since JavaScript is weakly typed, please declare props' types using propTypes for type validation.

```javascript
function App(props) {
  return <div>{props.name}</div>;
}
App.propTypes = {
  name: React.PropTypes.string.isRequired,
};
```

Built-in props type:

- PropTypes.array
- PropTypes.bool
- PropTypes.func
- PropTypes.number
- PropTypes.object
- PropTypes.string

#### Passing data from parent to child

![](https://zos.alipayobjects.com/rmsportal/NAzeMyUoPMqxfRv.png)

#### Passing data from child to parent

![](https://zos.alipayobjects.com/rmsportal/fiKKgDGuEJfSvxv.png)

### CSS Modules

<img src="https://zos.alipayobjects.com/rmsportal/mHVRpjNYhVuFdsS.png" width="150" style="background:#fff;" />

#### Understanding CSS Modules

Visual illustration of CSS Modules mechanism:

![](https://zos.alipayobjects.com/rmsportal/SWBwWTbZKqxwEPq.png)

`button` class will be renamed to `ProductList_button_1FU0u` after execution, `button` is a local name, `ProductList_button_1FU0u` is the global name. **so you can use simple descriptive name, without worrying about conflict**

After that, all you need to do is create related styles of `.button {...}` in css/less file, import and refer it by calling `styles.button`.

#### Defining Global CSS

CSS Modules are default to local scopes, to declare a global style, using `:global` syntax

For example:

```css
.title {
  color: red;
}
:global(.title) {
  color: green;
}
```

Calling by:

```javascript
<App className={styles.title} /> // red
<App className="title" />        // green
```

#### `classnames` Package

When dealing with some complex situations, each element can have multiple `className` and each `className` may also conditional dependent, when this is the case, [classnames](https://github.com/jedwatson/classnames) library will be handy.

```javascript
import classnames from 'classnames';
const App = (props) => {
  const cls = classnames({
    btn: true,
    btnLarge: props.type === 'submit',
    btnSmall: props.type === 'edit',
  });
  return <div className={cls} />;
};
```

Thus will create different `className` when passing different types to App Component

```javascript
<App type="submit" /> // btn btnLarge
<App type="edit" />   // btn btnSmall
```

## The life cycle

## data flow

## hooks
