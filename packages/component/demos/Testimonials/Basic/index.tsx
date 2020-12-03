import React from 'react';
import { MapItem, CardBox, TestimonialsBasic } from '@wetrial/component';
import { basicTestimonialsData } from '../testimonialsData';

const data = [
  {
    item: (
      <CardBox styleName="gx-text-center" heading="testimonials title">
        <TestimonialsBasic testimonial={basicTestimonialsData[0]} />
      </CardBox>
    ),
    copyCode: `
    <CardBox styleName="gx-text-center" heading="testimonials.basic">
    <TestimonialsBasic testimonial={basicTestimonialsData[0]} />
  </CardBox>
    `,
  },
];

export default () => {
  return <MapItem {...{ data, antSpan: 12, isDivider: true, cls: 'gx-justify-content-center' }} />;
};
