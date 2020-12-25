import React from 'react';
import productData from '../productData';
import { EproductItem, MapItem } from '@wetrial/component';

const data = [
  {
    item: <EproductItem grid product={productData[0]} />,
    copyCode: `<NotFound1 />`,
  },
  {
    item: <EproductItem grid product={productData[1]} />,
    copyCode: `<NotFound1 />`,
  },
];

export default () => {
  return <MapItem {...{ data, antSpan: 12, isDivider: true, cls: 'gx-justify-content-center' }} />;
};
