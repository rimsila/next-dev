---
title: style introduction
order: 1
group:
  title: style
  path: /style
  order: 3
nav:
  title: Front-end best practices
  path: /doc
  order: 100
---

## Style introduction

This document mainly introduces how to use and plan style files in projects. If you want to get basic CSS knowledge or view attributes, you can refer to [MDN Documentation](https://developer.mozilla.org/zh-CN/docs /Web/CSS/Reference).

## less

Wetrial-Template uses less as the style language by default. It is recommended to learn the relevant features of [less](http://lesscss.org/) before using it or when in doubt.

## CSS Modules

In the process of style development, there are two outstanding issues:

-Global pollution-selectors in CSS files are globally effective. For selectors with the same name in different files, according to the order in the generated files after build, the following styles will overwrite the previous ones; -The selector is complex-In order to avoid the above problems, we have to be careful when writing styles. The class name will carry a restricted range mark, which becomes longer and longer. It is easy to cause the naming style when multi-person development. Confusion, the number of selectors used on an element may also increase.

In order to solve the above problems, our scaffolding uses CSS Modules modularization scheme by default. Let's first look at how to write styles in this mode.

```tsx |pure
// example.ts
import styles from './example.less';
export default ({ title }) => <div className={styles.title}>{title}</div>;
```

```css |pure
// example.less
.title {
  color: @heading-color;
  font-weight: 600;
  margin-bottom: 16px;
}
```

There seems to be no change in writing style with less, but the class name is relatively simple (the same is true in actual projects). The change of the js file is to replace the original string with an object attribute when setting the className. The attribute name corresponds to the corresponding in the less file The class name is the same, and the object is imported from the less file.

In the above style file, `.title` will only take effect in this file, you can use the selector with the same name in any other file, and it won't affect this. But sometimes, do we just want a globally effective style? You can use `:global`.

```css |pure
// example.less
.title {
  color: @heading-color;
  font-weight: 600;
  margin-bottom: 16px;
}

/* Define global style */
:global(.text) {
  font-size: 16px;
}

/* Define multiple global styles */
:global {
  .footer {
    color: #ccc;
  }
  .sider {
    background: #ebebeb;
  }
}
```

The basic principle of CSS Modules is very simple, that is, to convert each class name (not declared by :global) according to certain rules to ensure its uniqueness. If you look at the dom structure of this example in a browser, you will find that the actual rendering looks like this:

```html |pure
<div class="title___3TqAx">title</div>
```

The class name is automatically added with a hash value, which guarantees its uniqueness.

In addition to the basic knowledge above, there are some key points to note:

-CSS Modules will only convert `className` and `id`. Others such as attribute selectors and tag selectors will not be processed. It is recommended to use className as much as possible. -Since there is no need to worry about the duplication of class names, your className can be as simple as possible under the premise of basic semantics.

The above is only the most basic introduction to CSS Modules. If you are interested, you can refer to other documents:

-[github/css-modules](https://github.com/css-modules/css-modules) -[CSS Modules Usage Tutorial](http://www.ruanyifeng.com/blog/2016/06/css_modules.html) -[CSS Modules Detailed Explanation and Practice in React](https://github.com/camsong/blog/issues/5)

## Style file category

In a project, style files can be divided into different categories according to different functions.

### src/index.less

Global style file, here you can make some general settings, such as the one that comes with scaffolding:

```css |pure
html,
body,
:global(#root) {
  height: 100%;
}

body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// temporary font size patch
:global(.ant-tag) {
  font-size: 12px;
}
```

> Because antd comes with some global settings, such as font size, color, line height, etc., here, you only need to pay attention to your own individual needs, without having to perform a lot of reset.

### src/utils/utils.less

Some utility functions can be placed here for calling, such as clearing float `.clearfix`.

### Module style

A file valid for a certain module/page.

#### General module level

For example, `src/layouts/BasicLayout.less`, which contains some basic layout styles, is referenced by `src/layouts/BasicLayout.ts`, and pages using this layout in the project do not need to care about the overall layout settings. If you need to use other layouts in your project, it is also recommended to put layout-related js and less here in `src/layouts`.

#### Page level

The styles related to the specific page, such as `src/routes/Dashborad/Monitor.less`, the content is only related to the content of this page. Under normal circumstances, if the page content is not particularly complicated, with the cooperation of the previous global styles and common module styles, there should not be much to write here.

#### Component level

This is also very simple. It is the style of the component. There are some fragments or relatively independent functions that are reused in the page. You can refine it into a component. The related styles should also be extracted and placed in the component instead of being confused on the page. in.

> The above style categories are for independent style files. Sometimes the style configuration is very simple and there is no repeated use. You can also use the inline style `style={{ ... }}` to set it.

## Override component style

Due to the personalized needs of the business, we often encounter situations where we need to cover component styles. Here is a simple example.

antd Select In the multi-select state, all selected items will be displayed by default. Here we add a limit height to it, and the scroll bar will be displayed if the height exceeds this height.

```js |pure
// TestPage.ts
import { Select } from 'antd';
import styles from './TestPage.less';
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

ReactDOM.render(
  <Select
    mode="multiple"
    style={{ width: 300 }}
    placeholder="Please select"
    className={styles.customSelect}
  >
    {children}
  </Select>,
  mountNode,
);
```

```css |pure
// TestPage.less
.customSelect {
  :global {
    .ant-select-selection {
      max-height: 51px;
      overflow: auto;
    }
  }
}
```

The method is very simple, there are two points to note:

- The imported antd component class name is not converted by CSS Modules, so the overridden class name `.ant-select-selection` must be placed in `:global`. -Because of the previous one, the coverage is global. In order to prevent it from affecting other Select components, it is necessary to wrap an additional className to limit the effective range of the style.
