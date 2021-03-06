import { NextFooter, MapItem } from '@wetrial/component';
import { Select } from 'antd';
import React, { useState } from 'react';
import { NextTheme, bgTypeArr, bgType } from '../../src/NextFooter/type';
import classnames from 'classnames';
import css from '../utils/custom-background.less';

export default () => {
  const [nextTheme, setNextTheme] = useState<NextTheme>('bg_cyan_8');
  const data = [
    {
      id: 1,
      item: (
        <NextFooter
          nextTheme={nextTheme}
          columns={[
            {
              title: 'related resources',
              items: [
                {
                  title: 'Ant Design Pro',
                  url: 'https://pro.ant.design/',
                  openExternal: true,
                },
                {
                  title: 'Ant Design Mobile',
                  url: 'https://mobile.ant.design/',
                  openExternal: true,
                },
                {
                  title: 'Kitchen',
                  url: 'https://kitchen.alipay.com/',
                  description: 'Sketch toolset',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  title: 'Ant Design Pro',
                  url: 'https://pro.ant.design/',
                  openExternal: true,
                },
                {
                  title: 'Ant Design Mobile',
                  url: 'https://mobile.ant.design/',
                  openExternal: true,
                },
                {
                  title: 'Kitchen',
                  url: 'https://kitchen.alipay.com/',
                  description: 'Sketch toolset',
                },
              ],
            },
            {
              title: 'help',
              items: [
                {
                  title: 'Ant Design Pro',
                  url: 'https://pro.ant.design/',
                  openExternal: true,
                },
                {
                  title: 'Ant Design Mobile',
                  url: 'https://mobile.ant.design/',
                  openExternal: true,
                },
                {
                  title: 'Kitchen',
                  url: 'https://kitchen.alipay.com/',
                  description: 'Sketch toolset',
                },
              ],
            },
            {
              icon: (
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                  alt="more products"
                />
              ),
              title: 'More products',
              items: [
                {
                  icon: (
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
                      alt="yuque"
                    />
                  ),
                  title: 'Yu Que',
                  url: 'https://yuque.com',
                  description: 'Knowledge Creation and Sharing Tool',
                  openExternal: true,
                },
                {
                  icon: (
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
                      alt="yuque"
                    />
                  ),
                  title: '云凤蝶',
                  url: 'https://yunfengdie.com',
                  description: 'China-Taiwan Construction Platform',
                  openExternal: true,
                },
                {
                  title: (
                    <Select
                      showSearch
                      style={{ width: 140 }}
                      optionFilterProp="children"
                      onChange={(v: NextTheme) => setNextTheme(v)}
                      defaultValue={bgType.bg_cyan_8}
                    >
                      {bgTypeArr?.map((i) => (
                        <Select.Option value={i} key={i} className={classnames(css[i])}>
                          {i}
                        </Select.Option>
                      ))}
                    </Select>
                  ),
                },
              ],
            },
          ]}
          bottom="Made with ❤️ by Rim Sila"
        />
      ),
      copyCode: `
      <NextFooter
          nextTheme={nextTheme}
          columns={[
            {
              title: 'related resources',
              items: [
                {
                  title: 'Ant Design Pro',
                  url: 'https://pro.ant.design/',
                  openExternal: true,
                },
                {
                  title: 'Ant Design Mobile',
                  url: 'https://mobile.ant.design/',
                  openExternal: true,
                },
                {
                  title: 'Kitchen',
                  url: 'https://kitchen.alipay.com/',
                  description: 'Sketch toolset',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  title: 'Ant Design Pro',
                  url: 'https://pro.ant.design/',
                  openExternal: true,
                },
                {
                  title: 'Ant Design Mobile',
                  url: 'https://mobile.ant.design/',
                  openExternal: true,
                },
                {
                  title: 'Kitchen',
                  url: 'https://kitchen.alipay.com/',
                  description: 'Sketch toolset',
                },
              ],
            },
            {
              title: 'help',
              items: [
                {
                  title: 'Ant Design Pro',
                  url: 'https://pro.ant.design/',
                  openExternal: true,
                },
                {
                  title: 'Ant Design Mobile',
                  url: 'https://mobile.ant.design/',
                  openExternal: true,
                },
                {
                  title: 'Kitchen',
                  url: 'https://kitchen.alipay.com/',
                  description: 'Sketch toolset',
                },
              ],
            },
            {
              icon: (
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                  alt="more products"
                />
              ),
              title: 'More products',
              items: [
                {
                  icon: (
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
                      alt="yuque"
                    />
                  ),
                  title: 'Yu Que',
                  url: 'https://yuque.com',
                  description: 'Knowledge Creation and Sharing Tool',
                  openExternal: true,
                },
                {
                  icon: (
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
                      alt="yuque"
                    />
                  ),
                  title: '云凤蝶',
                  url: 'https://yunfengdie.com',
                  description: 'China-Taiwan Construction Platform',
                  openExternal: true,
                },
                {
                  title: (
                    <Select
                      showSearch
                      style={{ width: 140 }}
                      optionFilterProp="children"
                      onChange={(v: NextTheme) => setNextTheme(v)}
                      defaultValue={bgType.bg_cyan_8}
                    >
                      {bgTypeArr?.map((i) => (
                        <Select.Option value={i} key={i} className={classnames(css[i])}>
                          {i}
                        </Select.Option>
                      ))}
                    </Select>
                  ),
                },
              ],
            },
          ]}
          bottom="Made with ❤️ by Rim Sila"
        />
      `,
    },
  ];

  return (
    <>
      <MapItem {...{ data, antSpan: 24 }} />
    </>
  );
};
