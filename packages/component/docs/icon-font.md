---
title: IconFont
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

## IconFont demo

<code src="../demos/icon-font/base.tsx" />

## IconFont

- small icon bundle size by just add icon you want into collection it will include only icons that you add here: http://www.iconfont.cn
- See the introduction bellow

## API

| Props | Description                                             | Types  | Defaults |
| :---- | :------------------------------------------------------ | :----- | :------- |
| type  | Icon type, it is recommended to name it`icon-`beginning | string | -        |

## Note

The system provides a global registration method. You only need to register once at the entrance of the system. This method has been registered at the entrance of the system and does not require developers to process`tsx` import { initComponent } from '@wetrial/component';

initComponent({ iconFontUrl:'' //icon Gallery URL })

```

```
