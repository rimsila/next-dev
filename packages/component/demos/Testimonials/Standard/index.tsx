import React from 'react';
import { MapItem, TestimonialStandard } from '@wetrial/component';
import { testimonialsData } from '../testimonialsData';

const data = [
  {
    item: <TestimonialStandard testimonial={testimonialsData[0]} />,
    copyCode: `<TestimonialStandard testimonial={testimonialsData[0]} />`,
  },
];

export default () => {
  return <MapItem {...{ data, antSpan: 16, isDivider: true, cls: 'gx-justify-content-center' }} />;
};
