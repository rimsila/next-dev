import { PlainListData } from '../data';

import React from 'react';
import { MapItem, PlainListItem } from '@wetrial/component';

const data = [
  {
    item: PlainListData.map((item, index) => <PlainListItem key={index} data={item} />),
    copyCode: `<NotFound1 />`,
  },
];

export default () => {
  return <MapItem {...{ data, antSpan: 24, isDivider: true, cls: 'gx-justify-content-center' }} />;
};
