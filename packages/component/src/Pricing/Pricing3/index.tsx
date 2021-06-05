import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Table } from 'antd';
import { getChildrenToRender, isImg } from '../../utils/common';

import './index.less';

class Pricing3 extends React.PureComponent {
  getColumns = (columns) => {
    return columns.map((item) => {
      const { childWrapper, ...$item } = item;
      return {
        align: 'center',
        ...$item,
        title: (
          <div {...childWrapper} data-edit="childWrapper">
            {childWrapper.children.map(getChildrenToRender)}
          </div>
        ),
      };
    });
  };

  getDataSource = (dataSource, columns) =>
    dataSource.map((item, i) => {
      const obj = { key: i.toString() };
      item.children.forEach(($item, ii) => {
        if (columns[ii]) {
          obj[columns[ii].key] = (
            <div
              {...$item}
              /* replace-start */
              data-edit="text,image"
              /* replace-end */
            >
              {
                typeof $item.children === 'string' && $item.children.match(isImg) ? (
                  <img src={$item.children} alt="img" />
                ) : (
                  /* replace-start-value = $item.children */ React.createElement('span', {
                    dangerouslySetInnerHTML: { __html: $item.children },
                  })
                )
                /* replace-end-value */
              }
            </div>
          );
        }
      });
      return obj;
    });

  getMobileChild = (table) => {
    const { columns, dataSource, ...tableProps } = table;
    const names = columns.children.filter((item) => item.key.indexOf('name') >= 0);
    const newColumns = columns.children.filter((item) => item.key.indexOf('name') === -1);
    return newColumns.map((item, i) => {
      const items = [].concat(names[0], item).filter((c) => c);
      if (items.length > 1) {
        items[0].colSpan = 0;
        items[1].colSpan = 2;
      }
      const dataSources = dataSource.children.map(($item) => {
        const child = $item.children.filter((c) => c.name.indexOf('name') === -1);
        const n = $item.children.filter((c) => c.name.indexOf('name') >= 0);
        return {
          ...$item,
          children: [].concat(n[0], child[i]).filter((c) => c),
        };
      });
      const props = {
        ...tableProps,
        columns: this.getColumns(items),
        dataSource: this.getDataSource(dataSources, items),
      };
      return <Table key={i.toString()} {...props} pagination={false} bordered />;
    });
  };

  render() {
    const {
      dataSource = {
        wrapper: {
          className: 'home-page-wrapper pricing2-wrapper',
        },
        page: {
          className: 'home-page pricing2',
        },
        OverPack: {
          playScale: 0.3,
          className: 'pricing2-content-wrapper',
        },
        titleWrapper: {
          className: 'pricing2-title-wrapper',
          children: [
            {
              name: 'title',
              children: 'Price list',
              className: 'pricing2-title-h1',
            },
          ],
        },
        Table: {
          name: 'tabsTitle',
          size: 'default',
          className: 'pricing2-table',
          columns: {
            children: [
              {
                dataIndex: 'name',
                key: 'name',
                name: 'empty',
                childWrapper: {
                  children: [
                    {
                      name: 'name',
                      children: ' ',
                    },
                    {
                      name: 'content',
                      children: ' ',
                    },
                  ],
                },
              },
              {
                dataIndex: 'free',
                key: 'free',
                name: 'free',
                childWrapper: {
                  className: 'pricing2-table-name-block',
                  children: [
                    {
                      name: 'name',
                      className: 'pricing2-table-name',
                      children: 'Free',
                    },
                    {
                      name: 'content',
                      className: 'pricing2-table-money',
                      children: '$0',
                    },
                    {
                      name: 'button',
                      children: {
                        href: '#',
                        children: 'Free trial',
                      },
                    },
                  ],
                },
              },
              {
                dataIndex: 'basic',
                key: 'basic',
                name: 'basic',
                childWrapper: {
                  className: 'pricing2-table-name-block',
                  children: [
                    {
                      name: 'name',
                      className: 'pricing2-table-name',
                      children: 'Basic',
                    },
                    {
                      name: 'content',
                      className: 'pricing2-table-money',
                      children: '$550',
                    },
                    {
                      name: 'button',
                      children: {
                        href: '#',
                        children: 'Buy now',
                      },
                    },
                  ],
                },
              },
              {
                dataIndex: 'pro',
                key: 'pro',
                name: 'pro',
                childWrapper: {
                  className: 'pricing2-table-name-block',
                  children: [
                    {
                      name: 'name',
                      className: 'pricing2-table-name',
                      children: 'Pro',
                    },
                    {
                      name: 'content',
                      className: 'pricing2-table-money',
                      children: '$2,200',
                    },
                    {
                      name: 'button',
                      children: {
                        href: '#',
                        type: 'primary',
                        children: 'Buy now',
                      },
                    },
                  ],
                },
              },
              {
                dataIndex: 'unlimited',
                key: 'unlimited',
                name: 'unlimited',
                childWrapper: {
                  className: 'pricing2-table-name-block',
                  children: [
                    {
                      name: 'name',
                      className: 'pricing2-table-name',
                      children: 'Unlimited',
                    },
                    {
                      name: 'content',
                      className: 'pricing2-table-money',
                      children: '$5,600',
                    },
                    {
                      name: 'button',
                      children: {
                        href: '#',
                        children: 'Buy now',
                      },
                    },
                  ],
                },
              },
            ],
          },
          dataSource: {
            children: [
              {
                name: 'list0',
                children: [
                  {
                    className: 'pricing2-table-content-name',
                    name: 'name',
                    children: 'Example series1',
                  },
                  {
                    children: 'Limited',
                    name: 'content0',
                    className: 'pricing2-table-content',
                  },
                  {
                    children: 'Unlimited',
                    name: 'content1',
                    className: 'pricing2-table-content',
                  },
                  {
                    children: 'Unlimited',
                    name: 'content2',
                    className: 'pricing2-table-content',
                  },
                  {
                    children: 'Unlimited',
                    name: 'content3',
                    className: 'pricing2-table-content',
                  },
                ],
              },
              {
                name: 'list1',
                children: [
                  {
                    className: 'pricing2-table-content-name',
                    name: 'name',
                    children: 'Example series2',
                  },
                  {
                    children: 'Limited',
                    name: 'content0',
                    className: 'pricing2-table-content',
                  },
                  {
                    children: 'Unlimited',
                    name: 'content1',
                    className: 'pricing2-table-content',
                  },
                  {
                    children: 'Unlimited',
                    name: 'content2',
                    className: 'pricing2-table-content',
                  },
                  {
                    children: 'Unlimited',
                    name: 'content3',
                    className: 'pricing2-table-content',
                  },
                ],
              },
              {
                name: 'list2',
                children: [
                  {
                    className: 'pricing2-table-content-name',
                    name: 'name',
                    children: 'Fixed broadband billing',
                  },
                  {
                    name: 'content0',
                    children: '50GB',
                    className: 'pricing2-table-content',
                  },
                  {
                    name: 'content1',
                    children: '250GB',
                    className: 'pricing2-table-content',
                  },
                  {
                    name: 'content2',
                    children: '600GB',
                    className: 'pricing2-table-content',
                  },
                  {
                    name: 'content3',
                    children: 'Unlimited',
                    className: 'pricing2-table-content',
                  },
                ],
              },
              {
                name: 'list3',
                children: [
                  {
                    className: 'pricing2-table-content-name',
                    name: 'name',
                    children: 'Idle load balancing',
                  },
                  {
                    children: '-',
                    name: 'content0',
                    className: 'pricing2-table-content',
                  },
                  {
                    name: 'content1',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
                    className: 'pricing2-table-content',
                  },
                  {
                    name: 'content2',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
                    className: 'pricing2-table-content',
                  },
                  {
                    name: 'content3',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
                    className: 'pricing2-table-content',
                  },
                ],
              },
              {
                name: 'list4',
                children: [
                  {
                    className: 'pricing2-table-content-name',
                    name: 'name',
                    children: '4nuclear',
                  },
                  {
                    name: 'content0',
                    children: '-',
                    className: 'pricing2-table-content',
                  },
                  {
                    name: 'content1',
                    children: '-',
                    className: 'pricing2-table-content',
                  },
                  {
                    name: 'content2',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
                    className: 'pricing2-table-content',
                  },
                  {
                    name: 'content3',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
                    className: 'pricing2-table-content',
                  },
                ],
              },
              {
                name: 'list5',
                children: [
                  {
                    className: 'pricing2-table-content-name',
                    name: 'name',
                    children: 'System disk (linear billing)',
                  },
                  {
                    name: 'content0',
                    children: '-',
                    className: 'pricing2-table-content',
                  },
                  {
                    name: 'content1',
                    children: '-',
                    className: 'pricing2-table-content',
                  },
                  {
                    name: 'content2',
                    children: '-',
                    className: 'pricing2-table-content',
                  },
                  {
                    name: 'content3',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
                    className: 'pricing2-table-content',
                  },
                ],
              },
            ],
          },
        },
      },
      isMobile,
      ...props
    } = this.props;
    const { Table: table, wrapper, page, titleWrapper } = dataSource;
    const { columns, dataSource: tableData, ...$table } = table;
    const tableProps = {
      ...$table,
      columns: this.getColumns(columns.children),
      dataSource: this.getDataSource(tableData.children, columns.children),
    };
    const childrenToRender = isMobile ? (
      this.getMobileChild(table)
    ) : (
      <Table key="table" {...tableProps} pagination={false} bordered />
    );
    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <div
            key="title"
            {...titleWrapper}
            /* replace-start */
            data-edit="titleWrapper"
            /* replace-end */
          >
            {titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...dataSource.OverPack}>
            <QueueAnim
              type="bottom"
              leaveReverse
              ease={['easeOutQuad', 'easeInOutQuad']}
              key="content"
            >
              {childrenToRender}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Pricing3;
