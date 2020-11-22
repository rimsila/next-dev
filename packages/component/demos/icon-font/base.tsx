/* eslint-disable no-param-reassign */
import React from 'react';
import {
  IconFont,
  initComponent,
  MapItem,
  iconData,
  NextRow,
  NextButton,
} from '@wetrial/component';
import { Select } from 'antd';

initComponent({
  iconFontUrl: ['//at.alicdn.com/t/font_2221049_e6cscr3k59p.js'],
});

export default () => {
  iconData?.forEach((i: any) => {
    i.item = <IconFont type={i.type} />;
    i.copyCode = `<IconFont type="${i.type}" />`;
  });
  const [data, setData] = React.useState(iconData);

  const onSearch = (v: any) => {
    if (v) {
      const newData = iconData?.filter((i) => i.type === v);
      setData(newData);
    } else {
      const newData = iconData?.filter((i) => i.type);
      setData(newData);
    }
  };
  const onBlur = () => {
    const newData = iconData?.filter((i) => i.type);
    setData(newData);
  };

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
            onBlur={onBlur}
          >
            {data?.map((i: any, key) => (
              <Select.Option value={i.type} key={String(key)}>
                {/* <span style={{ display: 'flex', alignItems: 'center' }}>
                  {i.item}&nbsp; {i.type}
                </span> */}
                {i.type}
              </Select.Option>
            ))}
          </Select>
        </span>
      </NextRow>
      <MapItem {...{ data, antSpan: 2, width: 20 }} />
    </>
  );
};
