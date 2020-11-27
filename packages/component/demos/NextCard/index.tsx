import React, { useState } from 'react';
import { MapItem, NextButton, NextRow, NextCard } from '@wetrial/component';
import { Select, Space, Spin, Switch } from 'antd';
import { NextTheme, btnTypeArr, btnType } from '../../src/NextCard/type';
import css from '../../src/style/core/custom-background.less';
import classnames from 'classnames';

export default () => {
  const [nextTheme, setNextTheme] = useState<NextTheme>(null);
  const [layout, setLayout] = useState<'default' | 'center'>(null);
  const [width, setWidth] = useState(600);
  const [loading, setLoading] = useState(false);
  const [bordered, setBordered] = useState(true);
  const [headerBordered, setHeaderBordered] = useState(true);
  const [customLoading, setCustomLoading] = useState(false);

  const header = { title: 'title', extra: 'extra', vertical: false };
  const [state, setState] = useState<{ title?: string; extra?: string; vertical?: any }>(header);
  const { extra, title, vertical } = state;

  const data = [
    {
      item: (
        <NextCard
          {...{
            title: state.title,
            extra: state.extra,
            layout,
            loading: customLoading ? <Spin /> : loading,
            bordered,
            headerBordered,
            nextTheme,
            style: { width },
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry standard dummy text ever since the 1500s, when an unknown printer took a
          galley
        </NextCard>
      ),
      copyCode: `<NextCard
      {...{
          ${layout ? `layout: '${layout}',` : ''}
          ${nextTheme ? `nextTheme: '${nextTheme}',` : ''}
          ${loading ? `loading: ${loading},` : `loading: <div> Custom Loading </div>,`}
          ${bordered ? `bordered: ${bordered},` : ''}
          ${headerBordered ? `headerBordered: ${headerBordered},` : ''}
          ${title ? `title: '${title}',` : ''}
          ${extra ? `extra: '${extra}',` : ''}
          ${width ? `style: {${width}}',` : ''}
      }}
    >
    content here
    </NextCard>
    `,
    },
    {
      item: (
        // @ts-ignore
        <NextCard
          {...{
            title: `${vertical ? 'vertical ' : 'horizontal'} internal card `,
            extra: (
              <Switch
                defaultChecked
                checkedChildren="horizontal on"
                unCheckedChildren="vertical on"
                onChange={() => setState({ vertical: !vertical })}
              />
            ),
            bordered,
            headerBordered,
            direction: vertical && 'column',
            gutter: vertical ? [0, 16] : 16,
            style: { marginTop: vertical ? 8 : 0 },
          }}
        >
          <NextCard
            {...{
              title: state.title,
              extra: state.extra,
              style: { width },
              layout,
              loading: customLoading ? <Spin /> : loading,
              bordered,
              headerBordered,
              nextTheme,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry standard dummy text ever since the 1500s, when an unknown printer
            took a galley
          </NextCard>
          <NextCard
            {...{
              title: state.title,
              extra: state.extra,
              style: { width },
              layout,
              loading: customLoading ? <Spin /> : loading,
              bordered,
              headerBordered,
              nextTheme,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry standard dummy text ever since the 1500s, when an unknown printer
            took a galley
          </NextCard>
        </NextCard>
      ),
      copyCode: `
      <NextCard
      {...{
        title: '${vertical ? 'vertical ' : 'horizontal'} internal card',
        ${bordered ? `bordered: ${bordered},` : ''}
        ${headerBordered ? `headerBordered: ${headerBordered},` : ''}
        ${vertical ? `direction: "column",` : ''}
        gutter: ${vertical ? [0, 16] : 16},
        ${vertical ? `style: { marginTop:8 },` : ''}

      }}
    >
      <NextCard
      {...{
        ${layout ? `layout: '${layout}',` : ''}
        ${nextTheme ? `nextTheme: '${nextTheme}',` : ''}
        ${loading ? `loading: ${loading},` : `loading: <div> Custom Loading </div>,`}
        ${bordered ? `bordered: ${bordered},` : ''}
        ${headerBordered ? `headerBordered: ${headerBordered},` : ''}
        ${title ? `title: '${title}',` : ''}
        ${extra ? `extra: '${extra}',` : ''}
        ${width ? `style: {width: ${width}},` : ''}
    }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry standard dummy text ever since the 1500s, when an unknown printer
        took a galley
      </NextCard>

      <NextCard 
      {...{
        ${layout ? `layout: '${layout}',` : ''}
        ${nextTheme ? `nextTheme: '${nextTheme}',` : ''}
        ${loading ? `loading: ${loading},` : `loading: <div> Custom Loading </div>,`}
        ${bordered ? `bordered: ${bordered},` : ''}
        ${headerBordered ? `headerBordered: ${headerBordered},` : ''}
        ${title ? `title: '${title}',` : ''}
        ${extra ? `extra: '${extra}',` : ''}
        ${width ? `style: {width: ${width}},` : ''}
    }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry standard dummy text ever since the 1500s, when an unknown printer
        took a galley
      </NextCard>
    </NextCard>      

      `,
    },
  ];

  return (
    <>
      <NextRow>
        <span>
          <Space size="small">
            <Switch
              checkedChildren="header on"
              unCheckedChildren="header off"
              onChange={() =>
                setState({
                  title: state.title ? '' : header.title,
                  extra: state.extra ? '' : header.extra,
                })
              }
            />
            <Switch
              checked={customLoading}
              checkedChildren="customLoading on"
              unCheckedChildren="customLoading off"
              onChange={() => {
                setCustomLoading(!customLoading);
                setLoading(false);
              }}
            />
            <Switch
              checked={loading}
              checkedChildren="loading"
              unCheckedChildren="loading"
              onChange={() => {
                setCustomLoading(false);
                setLoading(!loading);
              }}
            />

            <Switch
              defaultChecked
              checkedChildren="headerBordered on"
              unCheckedChildren="headerBordered off"
              onChange={() => setHeaderBordered(!headerBordered)}
            />
            <Switch
              defaultChecked
              checkedChildren="bordered on"
              unCheckedChildren="bordered off"
              onChange={() => setBordered(!bordered)}
            />
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
        {/* <span>
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
        </span> */}
      </NextRow>
      <MapItem {...{ data, antSpan: 24 }} />
    </>
  );
};
