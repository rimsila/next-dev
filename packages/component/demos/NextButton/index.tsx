import React, { useState } from 'react';
import { NextButton, MapItem, NextRow } from '@wetrial/component';
import { DownloadOutlined, SearchOutlined } from '@ant-design/icons';
import { NextBtnType, btnTypeArr } from '../../src/NextButton/index.dt';
import { Divider } from 'antd';

export default () => {
  const [type, setType] = useState<NextBtnType>('warning');

  function handleChange(value) {
    setType(value);
  }

  const data = [
    {
      id: 1,
      item: <NextButton type="primary">Primary Button</NextButton>,
      copyCode: `<NextButton type="primary">Primary Button</NextButton>`,
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
      item: <NextButton type="primary" shape="round" icon={<SearchOutlined />} size="large" />,
      copyCode: ` <NextButton type="primary" shape="round" icon={<SearchOutlined />} />`,
    },
    {
      id: 6,
      item: <NextButton type="link"> Link</NextButton>,
      copyCode: ` <NextButton type="link"> Link</NextButton>`,
    },
    {
      id: 6,
      item: (
        <NextButton type="dashed" disabled>
          dashed disabled
        </NextButton>
      ),
      copyCode: `<NextButton type="dashed" disabled> dashed disable</NextButton>`,
    },
    {
      id: 7,
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
      id: 8,
      item: (
        <NextButton type="primary" shape="round" loading>
          Loading
        </NextButton>
      ),
      copyCode: ` <NextButton type="primary" shape="round" loading> Loading </NextButton>`,
    },
    {
      id: 9,
      item: (
        <NextButton type="ghost" danger>
          ghost danger
        </NextButton>
      ),
      copyCode: ` <NextButton type="ghost" danger> ghost danger</NextButton>`,
    },
    {
      id: 10,
      item: (
        <NextButton type="link" next={type}>
          link warning
        </NextButton>
      ),
      copyCode: `<NextButton type="link" next="${type}">
      link warning
    </NextButton>`,
    },
    {
      id: 11,
      item: (
        <NextButton type="primary" next={type}>
          btn warning
        </NextButton>
      ),
      copyCode: `   <NextButton type="link" next="${type}">
      link warning
    </NextButton>`,
    },
    {
      id: 12,
      item: (
        <NextButton type="dashed" next={type}>
          dashed warning
        </NextButton>
      ),
      copyCode: `   <NextButton type="dashed" next="${type}">
      dashed warning
    </NextButton>`,
    },
    {
      id: 13,
      item: (
        <NextButton type="default" next={type}>
          default warning
        </NextButton>
      ),
      copyCode: `<NextButton type="default" next="${type}">
      default warning
    </NextButton>`,
    },
    {
      id: 14,
      item: (
        <NextButton type="text" next={type}>
          text warning
        </NextButton>
      ),
      copyCode: `<NextButton type="text" next="${type}">
      text warning
    </NextButton>`,
    },
    {
      id: 15,
      item: (
        <NextButton next={type} shape="round">
          round warning
        </NextButton>
      ),
      copyCode: `  <NextButton next="${type}" shape="round">
      round warning
    </NextButton>`,
    },
    {
      id: 16,
      item: (
        <NextButton type="primary" next={type} shape="round">
          primary round warning
        </NextButton>
      ),
      copyCode: `  <NextButton next="${type}" shape="round">
      round warning
    </NextButton>`,
    },
    {
      id: 17,
      item: (
        <NextButton next={type} loading>
          loading warning
        </NextButton>
      ),
      copyCode: ` <NextButton next="${type}" loading>
      loading warning
   </NextButton>`,
    },
  ];

  return (
    <>
      <NextRow>
        <NextButton type="link" size="small" danger>
          Change Color:
        </NextButton>
        {btnTypeArr?.map((i: any) => (
          <NextButton
            size="small"
            key={i}
            mr={2}
            type="primary"
            next={i}
            shape="round"
            onClick={() => handleChange(i)}
            style={{ borderLeft: (i === type && '9px solid blue') || '' }}
          >
            {i}
          </NextButton>
        ))}
      </NextRow>
      <Divider />
      <NextRow>
        <MapItem {...{ data: data.sort((a, b) => b.id - a.id), antSpan: 6 }} />
      </NextRow>
    </>
  );
};
