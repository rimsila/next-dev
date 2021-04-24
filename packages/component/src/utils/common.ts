import { Button } from 'antd';
import React from 'react';

export const getChildrenToRender = (item, i) => {
  let tag = item.name && item.name.indexOf('title') === 0 ? 'h1' : 'div';
  tag = item.href ? 'a' : tag;
  let children =
    typeof item.children === 'string' &&
    item.children.match(/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/)
      ? React.createElement('img', { src: item.children, alt: 'img' })
      : React.createElement('span', { dangerouslySetInnerHTML: { __html: item.children } });
  if (item.name.indexOf('button') === 0) {
    if (typeof item.children === 'object') {
      children = React.createElement(
        Button,
        {
          ...item.children,
          'data-edit': 'link,text',
        },
        React.createElement('span', {
          dangerouslySetInnerHTML: { __html: item.children.children },
        }),
      ) as any;
    } else {
      // Remove linkA, linkA all edited with text #
      item['data-edit'] = 'linkA,text';
    }
  }
  if (item.name.indexOf('link') === 0) {
    item['data-edit'] = 'linkA,text';
  }
  return React.createElement(tag, { key: i.toString(), ...item }, children);
};
