import React, { useState } from 'react';
import { IconFont, initComponent, MapItem, NextRow, NextButton } from '@wetrial/component';
import { Select } from 'antd';

export default () => {
  const init = [
    { type: 'icon-cambodia' },
    { type: 'icon-flag-cambodia' },
    { type: 'icon-lovex' },
    { type: 'icon-facebook1' },
    { type: 'icon-list-icon-github' },
    { type: 'icon-girl1146550easyiconnet' },
  ];
  const [schools1, setSchools1] = useState(init);

  const onSearch = (v: any) => {
    if (v) {
      const newData = schools1?.filter((i) => i.type === v);
      setSchools1(newData);
    }
  };
  const onClear = () => {
    setSchools1(init);
  };

  initComponent({
    iconFontUrl: ['//at.alicdn.com/t/font_2221049_8szkpgxzd38.js'],
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
            onBlur={onClear}
            onClear={onClear}
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
