import React from 'react';
import { MapItem, NotFound1, Error500 } from '@wetrial/component';

const data = [
  {
    item: <NotFound1 />,
    copyCode: `<NotFound1 />`,
  },
  {
    item: <Error500 />,
    copyCode: `<Error500 />`,
  },
];

export default () => {
  return <MapItem {...{ data, antSpan: 24, isDivider: true }} />;
};
