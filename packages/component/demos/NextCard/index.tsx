import React, { useState } from 'react';
import { MapItem, NextButton, NextCardSimple, NextRow } from '@wetrial/component';
import { Select, Space, Switch } from 'antd';
import { NextTheme, btnTypeArr, btnType } from '../../src/NextCard/type';
import css from '../../src/style/core/custom-background.less';
import classnames from 'classnames';

export default () => {
  const [nextTheme, setNextTheme] = useState<NextTheme>('light');
  const [layout, setLayout] = useState<'default' | 'center'>('default');
  const [width, setWidth] = useState(400);

  const data = [
    {
      item: (
        <NextCardSimple
          {...{
            data: {
              title: 'hello',
              extra: 'extra',
              nextTheme,
              content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                 unknown printer took a galley`,
            },
            width,
            layout,
          }}
        />
      ),
      copyCode: `<NextCardSimple
      {...{
        data: {
          title: 'hello',
          extra: 'extra',
          layout: '${layout}',
          nextTheme: '${nextTheme}',
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        width: ${width},
      }}
    />`,
    },
  ];

  return (
    <>
      <NextRow>
        <span>
          <Space size="small">
            <Switch
              checkedChildren="layout default"
              unCheckedChildren="layout center"
              onChange={() => setLayout(layout === 'default' ? 'center' : 'default')}
            />

            <Switch
              checkedChildren=" width 400"
              unCheckedChildren=" width 600"
              onChange={() => setWidth(width === 400 ? 600 : 400)}
            />
          </Space>
        </span>
        <NextButton type="link" danger>
          Change Color:
        </NextButton>
        <span>
          <Select
            showSearch
            style={{ width: 140 }}
            optionFilterProp="children"
            onChange={(v: NextTheme) => setNextTheme(v)}
            defaultValue={btnType.light}
          >
            {btnTypeArr?.map((i) => (
              <Select.Option
                value={i}
                key={i}
                className={classnames(css[i])}
                style={{ color: 'black' }}
              >
                {i}
              </Select.Option>
            ))}
          </Select>
        </span>
      </NextRow>
      <MapItem {...{ data, antSpan: 6 }} />
    </>
  );
};
