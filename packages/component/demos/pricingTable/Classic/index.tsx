import React from 'react';
import { MapItem, PricingTable1, PricingTable2, PricingTable3 } from '@wetrial/component';

const data = [
  {
    item: (
      <PricingTable1
        styleName="gx-pt-classic gx-bg-amber-light gx-package"
        headerStyle="gx-package-header gx-bg-amber gx-text-black"
        itemStyle="gx-package-body"
      />
    ),
    copyCode: `<NotFound1 />`,
  },
  {
    item: (
      <PricingTable2
        styleName="gx-pt-classic gx-bg-primary-light gx-package gx-highlight"
        headerStyle="gx-package-header gx-bg-primary gx-text-white"
        itemStyle="gx-package-body gx-text-white"
        footerStyle="gx-btn-primary"
      />
    ),
    copyCode: `<NotFound1 />`,
  },
  {
    item: (
      <PricingTable3
        styleName="gx-pt-classic gx-package gx-bg-green-light"
        headerStyle="gx-package-header gx-bg-green gx-text-black"
        itemStyle="gx-package-body"
      />
    ),
    copyCode: `<NotFound1 />`,
  },
];

export default () => {
  return <MapItem {...{ data, antSpan: 12, isDivider: true, cls: 'gx-justify-content-center' }} />;
};
