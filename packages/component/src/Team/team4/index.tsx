import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col, Divider } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '../../utils/common';
import './index.less';

class Teams4 extends React.PureComponent {
  getBlockChildren = (data) =>
    data.map((item, i) => {
      const { titleWrapper, image, ...$item } = item;
      return (
        <Col key={i.toString()} {...$item} data-edit="Col, titleWrapper">
          <Row>
            <Col span={7}>
              <div {...image}>
                <img src={image.children} alt="img" />
              </div>
            </Col>
            <Col span={17}>
              <QueueAnim {...titleWrapper} type="bottom">
                {titleWrapper.children.map(getChildrenToRender)}
              </QueueAnim>
            </Col>
          </Row>
        </Col>
      );
    });

  getBlockTopChildren = (data) =>
    data.map((item, i) => {
      const { titleWrapper, ...$item } = item;
      return (
        <Col key={i.toString()} {...$item} data-edit="Col, titleWrapper">
          {titleWrapper.children.map(getChildrenToRender)}
        </Col>
      );
    });

  render() {
    const { ...props } = this.props as any;
    const {
      dataSource = {
        wrapper: {
          className: 'home-page-wrapper teams3-wrapper',
        },
        page: {
          className: 'home-page teams3',
        },
        OverPack: {
          playScale: 0.3,
          className: '',
        },
        titleWrapper: {
          className: 'title-wrapper',
          children: [
            {
              name: 'title',
              children: 'team members',
            },
          ],
        },
        blockTop: {
          className: 'block-top-wrapper',
          children: [
            {
              name: 'block0',
              className: 'block-top',
              md: 8,
              xs: 24,
              titleWrapper: {
                children: [
                  {
                    name: 'image',
                    className: 'teams3-top-image',
                    children:
                      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
                  },
                  {
                    name: 'title',
                    className: 'teams3-top-title',
                    children: 'Ye Xiuying',
                  },
                  {
                    name: 'content',
                    className: 'teams3-top-job',
                    children: 'Company + position information is temporarily missing',
                  },
                  {
                    name: 'content1',
                    className: 'teams3-top-content',
                    children:
                      'AntV is Ant Financials next-generation data visualization solution, dedicated to providing a set of simple, convenient, professional and reliable data visualization best practices. ',
                  },
                ],
              },
            },
            {
              name: 'block1',
              className: 'block-top',
              md: 8,
              xs: 24,
              titleWrapper: {
                children: [
                  {
                    name: 'image',
                    className: 'teams3-top-image',
                    children:
                      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
                  },
                  {
                    name: 'title',
                    className: 'teams3-top-title',
                    children: 'Han Yong',
                  },
                  {
                    name: 'content',
                    className: 'teams3-top-job',
                    children: 'Company + position information is temporarily missing',
                  },
                  {
                    name: 'content1',
                    className: 'teams3-top-content',
                    children:
                      'Yu Que is an elegant and efficient online document editing and collaboration tool that allows every company to easily own a document center that has been used internally by Alibaba Group for many years and is the first choice for many small and medium-sized enterprises. ',
                  },
                ],
              },
            },
            {
              name: 'block2',
              className: 'block-top',
              md: 8,
              xs: 24,
              titleWrapper: {
                children: [
                  {
                    name: 'image',
                    className: 'teams3-top-image',
                    children:
                      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
                  },
                  {
                    name: 'title',
                    className: 'teams3-top-title',
                    children: 'Ye Xiuying',
                  },
                  {
                    name: 'content',
                    className: 'teams3-top-job',
                    children: 'Company + position information is temporarily missing',
                  },
                  {
                    name: 'content1',
                    className: 'teams3-top-content',
                    children:
                      'AntV is Ant Financials next-generation data visualization solution, dedicated to providing a set of simple, convenient, professional and reliable data visualization best practices. ',
                  },
                ],
              },
            },
          ],
        },
        block: {
          className: 'block-wrapper',
          gutter: 72,
          children: [
            {
              name: 'block0',
              className: 'block',
              md: 8,
              xs: 24,
              image: {
                name: 'image',
                className: 'teams3-image',
                children:
                  'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
              },
              titleWrapper: {
                className: 'teams3-textWrapper',
                children: [
                  {
                    name: 'title',
                    className: 'teams3-title',
                    children: 'Ye Xiuying',
                  },
                  {
                    name: 'content',
                    className: 'teams3-job',
                    children: 'Company + position information is temporarily missing',
                  },
                  {
                    name: 'content1',
                    className: 'teams3-content',
                    children: 'AntV is Ant Financials new generation data visualization solution. ',
                  },
                ],
              },
            },

            {
              name: 'block1',
              className: 'block',
              md: 8,
              xs: 24,
              image: {
                name: 'image',
                className: 'teams3-image',
                children:
                  'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
              },
              titleWrapper: {
                className: 'teams3-textWrapper',
                children: [
                  {
                    name: 'title',
                    className: 'teams3-title',
                    children: 'Han Yong',
                  },
                  {
                    name: 'content',
                    className: 'teams3-job',
                    children: 'Company + position information is temporarily missing',
                  },
                  {
                    name: 'content1',
                    className: 'teams3-content',
                    children:
                      'Yuque is an elegant and efficient online document editing and collaboration tool. ',
                  },
                ],
              },
            },
            {
              name: 'block2',
              className: 'block',
              md: 8,
              xs: 24,
              image: {
                name: 'image',
                className: 'teams3-image',
                children:
                  'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
              },
              titleWrapper: {
                className: 'teams3-textWrapper',
                children: [
                  {
                    name: 'title',
                    className: 'teams3-title',
                    children: 'Ye Xiuying',
                  },
                  {
                    name: 'content',
                    className: 'teams3-job',
                    children: 'Company + position information is temporarily missing',
                  },
                  {
                    name: 'content1',
                    className: 'teams3-content',
                    children: 'AntV is Ant Financials new generation data visualization solution. ',
                  },
                ],
              },
            },
            {
              name: 'block3',
              className: 'block',
              md: 8,
              xs: 24,
              image: {
                name: 'image',
                className: 'teams3-image',
                children:
                  'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
              },
              titleWrapper: {
                className: 'teams3-textWrapper',
                children: [
                  {
                    name: 'title',
                    className: 'teams3-title',
                    children: 'Ye Xiuying',
                  },
                  {
                    name: 'content',
                    className: 'teams3-job',
                    children: 'Company + position information is temporarily missing',
                  },
                  {
                    name: 'content1',
                    className: 'teams3-content',
                    children: 'AntV is Ant Financials new generation data visualization solution. ',
                  },
                ],
              },
            },
            {
              name: 'block4',
              className: 'block',
              md: 8,
              xs: 24,
              image: {
                name: 'image',
                className: 'teams3-image',
                children:
                  'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
              },
              titleWrapper: {
                className: 'teams3-textWrapper',
                children: [
                  {
                    name: 'title',
                    className: 'teams3-title',
                    children: 'Han Yong',
                  },
                  {
                    name: 'content',
                    className: 'teams3-job',
                    children: 'Company + position information is temporarily missing',
                  },
                  {
                    name: 'content1',
                    className: 'teams3-content',
                    children:
                      'Yuque is an elegant and efficient online document editing and collaboration tool. ',
                  },
                ],
              },
            },
            {
              name: 'block5',
              className: 'block',
              md: 8,
              xs: 24,
              image: {
                name: 'image',
                className: 'teams3-image',
                children:
                  'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
              },
              titleWrapper: {
                className: 'teams3-textWrapper',
                children: [
                  {
                    name: 'title',
                    className: 'teams3-title',
                    children: 'Ye Xiuying',
                  },
                  {
                    name: 'content',
                    className: 'teams3-job',
                    children: 'Company + position information is temporarily missing',
                  },
                  {
                    name: 'content1',
                    className: 'teams3-content',
                    children: 'AntV is Ant Financials new generation data visualization solution. ',
                  },
                ],
              },
            },
            {
              name: 'block6',
              className: 'block',
              md: 8,
              xs: 24,
              image: {
                name: 'image',
                className: 'teams3-image',
                children:
                  'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
              },
              titleWrapper: {
                className: 'teams3-textWrapper',
                children: [
                  {
                    name: 'title',
                    className: 'teams3-title',
                    children: 'Ye Xiuying',
                  },
                  {
                    name: 'content',
                    className: 'teams3-job',
                    children: 'Company + position information is temporarily missing',
                  },
                  {
                    name: 'content1',
                    className: 'teams3-content',
                    children: 'AntV is Ant Financials new generation data visualization solution. ',
                  },
                ],
              },
            },
            {
              name: 'block7',
              className: 'block',
              md: 8,
              xs: 24,
              image: {
                name: 'image',
                className: 'teams3-image',
                children:
                  'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
              },
              titleWrapper: {
                className: 'teams3-textWrapper',
                children: [
                  {
                    name: 'title',
                    className: 'teams3-title',
                    children: 'Han Yong',
                  },
                  {
                    name: 'content',
                    className: 'teams3-job',
                    children: 'Company + position information is temporarily missing',
                  },
                  {
                    name: 'content1',
                    className: 'teams3-content',
                    children:
                      'Yuque is an elegant and efficient online document editing and collaboration tool. ',
                  },
                ],
              },
            },
            {
              name: 'block8',
              className: 'block',
              md: 8,
              xs: 24,
              image: {
                name: 'image',
                className: 'teams3-image',
                children:
                  'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
              },
              titleWrapper: {
                className: 'teams3-textWrapper',
                children: [
                  {
                    name: 'title',
                    className: 'teams3-title',
                    children: 'Ye Xiuying',
                  },
                  {
                    name: 'content',
                    className: 'teams3-job',
                    children: 'Company + position information is temporarily missing',
                  },
                  {
                    name: 'content1',
                    className: 'teams3-content',
                    children: 'AntV is Ant Financials new generation data visualization solution. ',
                  },
                ],
              },
            },
          ],
        },
      },
    } = props;
    delete props.dataSource;
    delete props.isMobile;
    const listChildren = this.getBlockChildren(dataSource.block.children);
    const listTopChildren = this.getBlockTopChildren(dataSource.blockTop.children);
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div {...dataSource.titleWrapper} data-edit="titleWrapper">
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...dataSource.OverPack}>
            <QueueAnim type="bottom" key="tween" leaveReverse>
              <QueueAnim
                type="bottom"
                key="blockTop"
                {...dataSource.blockTop}
                component={Row}
                data-edit="Row"
              >
                {listTopChildren}
              </QueueAnim>
              <Divider key="divider" />
              <QueueAnim
                type="bottom"
                key="block"
                {...dataSource.block}
                component={Row}
                data-edit="Row"
              >
                {listChildren}
              </QueueAnim>
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Teams4;
