import React from 'react';
import { data as listData } from '../data';
import { MapItem, StripListItem } from '@wetrial/component';

const data = [
  {
    item: listData.map((item, index) => (
      <StripListItem key={index} data={item} styleName="gx-card-strip" />
    )),
    copyCode: `<NotFound1 />`,
  },
];

export default () => {
  return <MapItem {...{ data, antSpan: 24, isDivider: true, cls: 'gx-justify-content-center' }} />;
};
