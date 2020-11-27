---
title: NextCard
order: 40
nav:
  title: Component
  order: 3
  path: /component
group:
  title: card
  order: 3
  path: /card
---

# Next Notification

## Usage

`import { nextNotification } from'@wetrial/component'; `

### Demo

<code src="../demos/NextCard" />

## API

//NextCard is completely extend from proCard We just rename it to @next-dev/component All Api are the same original doc here https://procomponents.ant.design/components/card/

| Parameters | Description | Type | Default Value |
| --- | --- | --- | --- |
| title | Title | `React.ReactNode` | - |
| subTitle | Subtitle | `React.ReactNode` | - |
| tooltip | Icon hover prompt information on the right side of the title | `string` | - |
| extra | Customized area in the upper right corner | `React.ReactNode` | - |
| layout | Content layout, support vertical centering | `default` \| `center` | default |
| loading | Loading, support custom loading style | `boolean` \| `ReactNode` | false |
| colSpan | Grid layout width, 24 grids, support specified width px or percentage, support responsive object writing `{ xs: 8, sm: 16, md: 24}` | `number` \| `string` | 24 |
| gutter | Number or use array form to set [horizontal spacing, vertical spacing] at the same time, support responsive object writing `{ xs: 8, sm: 16, md: 24}` | `number` \| `array` | 0 |
| split | Direction to split the card | `vertical` \| `horizontal` | - |
| type | Card type | `inner` | - |
| direction | Specify the Flex direction, only valid when nesting sub-cards, the default direction is row horizontal | `column` | - |
| bordered | Is there a border | `boolean` | false |
| ghost | Ghost mode, that is, whether to cancel the padding of the card content area and the background color of the card. | `boolean` | false |
| headerBordered | Is there a dividing line in the header | `boolean` | false |
| collapsed | Controlled attribute, whether to collapse or not | `boolean` | false |
| collapsible | Whether the configuration is collapsible, invalid when controlled | `boolean` | false |
| defaultCollapsed | Default collapsed, invalid when controlled | `boolean` | false |
| onCollapse | Collapse card event, invalid when controlled | `(collapsed: boolean) => void` | - |
| tabs | Tab page configuration | See ProCardTabs below | - |

### ProCardTabs

| Parameters | Description | Type | Default Value |
| :-- | :-- | :-- | :-- |
| activeKey | currently selected item | string | - |
| type | Basic style of the tab, optional `line`, `card`, `editable-card` type | string | inline |
| onChange | 回调 | `(activeKey: string) => void;` | - |

-See antd [Tab](https://ant.design/components/tabs-cn/#Tabs) API description for more attributes.

### ProCard.TabPane

Support all attributes of `ProCard` and all attributes of [Tabs.TabPane](https://ant.design/components/tabs-cn/#Tabs.TabPane).

| Parameters | Description | Type | Default Value |
| :-- | :-- | :-- | :-- |
| key | Corresponding to activeKey, used to calibrate whether to select and dom update. Do not repeat, otherwise it will cause abnormal performance | `string` | - |
| tab | Tab header display text | `ReactNode` | - |
| disabled | not available | `boolean` | false |

### ProCard.Divider

Used for separation when grouping content.

### ProCard.Group

The property is the same as that of ProCard, it will cancel the margin of the card content and be used to group multiple card
