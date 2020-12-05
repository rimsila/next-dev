import React from 'react';
import { MapItem, AayurvedaCard, BuildingCard, DryFruit, FlyingBird } from '@wetrial/component';

const data = [
  {
    item: <AayurvedaCard />,
    copyCode: `<TestimonialStandard testimonial={testimonialsData[0]} />`,
  },
  {
    item: <BuildingCard />,
    copyCode: `<TestimonialStandard testimonial={testimonialsData[0]} />`,
  },
  {
    item: (
      <DryFruit
        {...{
          avatar:
            'https://images.unsplash.com/photo-1563978376166-9c3bac8d7e13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        }}
      />
    ),
    copyCode: `<TestimonialStandard testimonial={testimonialsData[0]} />`,
  },
  {
    item: (
      <FlyingBird
        {...{
          avatar:
            // eslint-disable-next-line max-len
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA4LTA4VDE1OjA2OjAyKzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wOC0wOFQxNTowNyswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wOC0wOFQxNTowNyswNTozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk5MUVEMjE5QUVFMTFFODk5NTBEOEZGRkNCRUY1NzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk5MUVEMjI5QUVFMTFFODk5NTBEOEZGRkNCRUY1NzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5z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',
        }}
      />
    ),
    copyCode: `<TestimonialStandard testimonial={testimonialsData[0]} />`,
  },
];

export default () => {
  return <MapItem {...{ data, antSpan: 8, gut1: 30 }} />;
};
