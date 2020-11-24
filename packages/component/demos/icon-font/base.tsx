import React, { useState } from 'react';
import { IconFont, initComponent, MapItem, NextRow, NextButton } from '@wetrial/component';
import { Select } from 'antd';

export default () => {
  const [schools1, setSchools1] = useState([]);

  const onSearch = (v: any) => {
    if (v) {
      const newData = schools1?.filter((i) => i.type === v);
      setSchools1(newData);
    }
  };

  initComponent({
    iconFontUrl: [''],
  });

  schools1?.forEach((i: any) => {
    i.item = <IconFont type={i.type} />;
    i.copyCode = `<IconFont type="${i.type}" />`;
  });
  return (
    <>
      <NextRow>
        <NextButton type="link" danger>
          Search Color:
        </NextButton>
        <span>
          <Select
            showSearch
            allowClear
            size="large"
            style={{ width: 240 }}
            optionFilterProp="children"
            onChange={onSearch}
          >
            {schools1?.map((i: any, key) => (
              <Select.Option value={i.type} key={String(key)}>
                {i.type}
              </Select.Option>
            ))}
          </Select>
        </span>
      </NextRow>
      <MapItem {...{ data: schools1, antSpan: 2, width: 20 }} />
    </>
  );
};
