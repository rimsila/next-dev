import React from 'react';
import { MapItem, NextBlogCard } from '@wetrial/component';

export default () => {
  const data = [
    {
      item: <NextBlogCard {...{ data: { title: 'Blog Card' } }} />,
      copyCode: `<NextBlogCard />`,
    },
    {
      item: <NextBlogCard {...{ alt: true, data: { title: 'Blog Card ALT' } }} />,
      copyCode: `<NextBlogCard alt/>`,
    },
  ];

  return (
    <>
      <MapItem {...{ data, antSpan: 24 }} />
    </>
  );
};
