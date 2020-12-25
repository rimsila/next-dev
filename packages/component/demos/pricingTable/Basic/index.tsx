import React from 'react';
import { MapItem, PricingTable1, PricingTable2, PricingTable3 } from '@wetrial/component';

const data = [
  {
    item: (
      <PricingTable1
        styleName="gx-pt-default gx-package"
        headerStyle="gx-package-header gx-bg-primary gx-text-white"
        itemStyle="gx-package-body"
        footerStyle=""
      />
    ),
    copyCode: `<NotFound1 />`,
  },
  {
    item: (
      <PricingTable2
        styleName="gx-pt-default gx-package gx-bg-primary-light gx-highlight gx-border-0"
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
        styleName="gx-pt-default gx-package"
        headerStyle="gx-package-header gx-bg-primary gx-text-white"
        itemStyle="gx-package-body"
        footerStyle=""
      />
    ),
    copyCode: `<NotFound1 />`,
  },
];

export default () => {
  return <MapItem {...{ data, antSpan: 12, isDivider: true, cls: 'gx-justify-content-center' }} />;
};
