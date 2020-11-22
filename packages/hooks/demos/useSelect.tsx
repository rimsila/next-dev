import React from 'react';
import { NextButton, MapItem, NextRow } from '@wetrial/component';

import { Divider, Select } from 'antd';

const { Option } = Select;

export default () => {
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  const data = [
    {
      id: 1,
      item: (
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      ),
      copyCode: `<NextButton type="primary">Primary Button</NextButton>`,
    },
  ];

  return (
    <>
      <NextRow>
        <NextButton type="link" size="small" danger>
          Change Color:
        </NextButton>
      </NextRow>
      <Divider />
      <NextRow>
        <MapItem {...{ data: data.sort((a, b) => b.id - a.id), antSpan: 6 }} />
      </NextRow>
    </>
  );
};
