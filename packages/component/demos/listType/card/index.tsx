import React from 'react';
import { cardsList } from '../data';
import { MapItem, CardsListItem } from '@wetrial/component';

const data = [
  {
    item: cardsList.map((item, index) => (
      <CardsListItem key={index} data={item} styleName="gx-card-list" />
    )),
    copyCode: `<NotFound1 />`,
  },
];

export default () => {
  return <MapItem {...{ data, antSpan: 24, isDivider: true, cls: 'gx-justify-content-center' }} />;
};
