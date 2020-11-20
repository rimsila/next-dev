import React from 'react';
import { NextButton, MapItem, NextRow } from '@wetrial/component';
import { DownloadOutlined, SearchOutlined } from '@ant-design/icons';

export default () => {
  const data = [
    {
      item: <NextButton type="primary">Primary Button</NextButton>,
      copyCode: `<NextButton type="primary">Primary Button</NextButton>`,
    },
    {
      item: (
        <NextButton type="primary" shape="round">
          Primary round
        </NextButton>
      ),
      copyCode: ` <NextButton type="primary" shape="round">
      Primary round
    </NextButton>`,
    },
    {
      item: <NextButton>Default Button</NextButton>,
      copyCode: `<NextButton></NextButton>`,
    },
    {
      item: (
        <NextButton type="primary" danger>
          Primary danger
        </NextButton>
      ),
      copyCode: `<NextButton type="primary" danger>
      Primary danger
    </NextButton>`,
    },

    {
      item: (
        <NextButton type="primary" danger shape="round">
          Primary danger round
        </NextButton>
      ),
      copyCode: `<NextButton type="primary" danger shape="round">
      Primary danger round
    </NextButton>`,
    },

    {
      item: (
        <NextButton type="primary" block>
          Primary block
        </NextButton>
      ),
      copyCode: `<NextButton type="primary" primary block>
      primary block
    </NextButton>`,
    },

    {
      item: <NextButton type="primary" shape="round" icon={<SearchOutlined />} size="large" />,
      copyCode: ` <NextButton type="primary" shape="round" icon={<SearchOutlined />} />`,
    },
    {
      item: <NextButton type="link"> Link</NextButton>,
      copyCode: ` <NextButton type="link"> Link</NextButton>`,
    },
    {
      item: (
        <NextButton type="dashed" disabled>
          dashed disabled
        </NextButton>
      ),
      copyCode: `<NextButton type="dashed" disabled> dashed disable</NextButton>`,
    },
    {
      item: (
        <NextButton type="primary" icon={<DownloadOutlined />}>
          Icon start
        </NextButton>
      ),
      copyCode: `<NextButton type="primary" icon={<DownloadOutlined />}>
      Icon start
     </NextButton>`,
    },
    {
      item: (
        <NextButton type="primary" shape="round" loading>
          Loading
        </NextButton>
      ),
      copyCode: ` <NextButton type="primary" shape="round" loading> Loading </NextButton>`,
    },
    {
      item: (
        <NextButton type="ghost" danger>
          ghost danger
        </NextButton>
      ),
      copyCode: ` <NextButton type="ghost" danger> ghost danger</NextButton>`,
    },
  ];

  return (
    <NextRow>
      <MapItem {...{ data, antSpan: 6 }} />
    </NextRow>
  );
};
