---
title: NextFooter
order: 40
nav:
  title: Component
  order: 1
  path: /component
group:
  title: Footer
  order: 1
  path: /footer
---

## Usage NextFooter

```tsx |pure
import  NextFooter from'@next-dev/component/es/NextFooter'; 


```

## Demo 1 normal

<code src="../../demos/NextFooter" />

## Demo 2: Row

<code src="../../demos/NextFooter/row.tsx" />

## API

Pretty Footer react component used in [ant.design](https://ant.design)

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| prefixCls | string | rc-footer |  |
| className | string | '' | additional class name of footer |
| style | React.CSSProperties |  | style properties of footer |
| columns | [Column](#Column) Array | [] | columns data inside footer |
| bottom | ReactNode |  | extra bottom area beneath footer columns |
| theme | 'light' \| 'dark' | 'dark' | preset theme of footer |
| backgroundColor | string | '#000' | background color of footer |
| columnLayout | 'space-around' or 'space-between' | 'space-around' | justify-content value of columns element |
| maxColumnsPerRow | number | - | max count of columns for each row |

### Column

| Property  | Type                       | Default | Description                     |
| --------- | -------------------------- | ------- | ------------------------------- |
| icon      | ReactNode                  |         | icon that before column title   |
| title     | ReactNode                  |         | title of column                 |
| items     | [Item](#Column-Item) Array | []      | items data inside each column   |
| className | string                     | ''      | additional class name of footer |
| style     | React.CSSProperties        |         | style properties of footer      |

### Column Item

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| icon | ReactNode |  | icon that before column title |
| title | ReactNode |  | title of column |
| description | ReactNode |  | description of column, come after title |
| url | string |  | link url of item title |
| openExternal | boolean | false | link target would be `_blank` if `openExternal` is ture |
| className | string | '' | additional class name of footer |
| style | React.CSSProperties |  | style properties of footer |
| LinkComponent | React.ReactType | 'a' | the link element to render item |
