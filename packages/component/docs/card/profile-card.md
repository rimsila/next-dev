---
title: Card Profile
order: 40
nav:
  title: Component
  order: 1
  path: /component
group:
  title: Card
  order: 1
  path: /card
---

## IconFont demo

<code src="../../demos/NextCard/ProfileCard.tsx" />

## Usage 

- small icon bundle size by just add icon you want into collection it will include only icons that you add here: http://www.iconfont.cn
  
```tsx |pure
import IconFont from'@next-dev/component/es/IconFont'; 

<IconFont type="icon-list-icon-github" />
```


## API

| Props | Description                                             | Types  | Defaults |
| :---- | :------------------------------------------------------ | :----- | :------- |
| type  | Icon type, it is recommended to name it`icon-`beginning | string | -        |

## Note

The system provides a global registration method. You only need to register once at the entrance of the system. This method has been registered at the entrance of the system and does not require developers to process`tsx` import { initComponent } from '@wetrial/component';

initComponent({ iconFontUrl:'' //icon Gallery URL })

```

```
