import React from 'react';
import { MapItem, CardBox, TestimonialClassic } from '@wetrial/component';
import { testimonialsData } from '../testimonialsData';

const data = [
  {
    item: (
      <CardBox styleName="gx-text-center" heading="testimonials.classic">
        <TestimonialClassic testimonial={testimonialsData[0]} />
      </CardBox>
    ),
    copyCode: `<CardBox styleName="gx-text-center" heading="testimonials.classic">
    <TestimonialClassic testimonial={testimonialsData[0]} />
  </CardBox>`,
  },
];

export default () => {
  return <MapItem {...{ data, antSpan: 16, isDivider: true, cls: 'gx-justify-content-center' }} />;
};
