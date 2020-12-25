import React from 'react';
import { EproductItem, MapItem } from '@wetrial/component';
import productData from '../productData';

const data = [
  {
    item: <EproductItem product={productData[1]} />,
    copyCode: `<NotFound1 />`,
  },
];

export default () => {
  return <MapItem {...{ data, antSpan: 24, isDivider: true, cls: 'gx-justify-content-center' }} />;
};
