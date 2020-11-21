---
title: IconFont - Font icon
order: 40
nav:
  title: Component
  order: 2
  path: /component
group:
  title: Universal
  order: 2
  path: /common
---

# IconFont - Font icon

IconFont Used to display custom icon library :http://www.iconfont.cn/

## When to use

antd If not in the icon library, add by front-end staff http://www.iconfont.cn

## Code demo

### Basic use

<code src="../demos/icon-font/base.tsx" />

## API

| Props | Description                                             | Types  | Defaults |
| :---- | :------------------------------------------------------ | :----- | :------- |
| type  | Icon type, it is recommended to name it`icon-`beginning | string | -        |

## Note

The system provides a global registration method. You only need to register once at the entrance of the system. This method has been registered at the entrance of the system and does not require developers to process`tsx` import { initComponent } from '@wetrial/component';

initComponent({ iconFontUrl:'' //icon Gallery URL })

```

```
