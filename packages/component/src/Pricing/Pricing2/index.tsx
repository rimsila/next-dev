import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Row, Col, Button } from 'antd';
import { getChildrenToRender } from '../../utils/common';

import './index.less';

const getBlock = (name, children: any = {}) => ({
  name,
  className: 'pricing1-block',
  md: 8,
  xs: 24,
  children: {
    wrapper: {
      className: `pricing1-block-box ${children.wrapperClass || ''}`,
    },
    topWrapper: {
      className: 'pricing1-top-wrapper',
    },
    name: {
      className: 'pricing1-name',
      children: children.name,
    },
    money: {
      className: 'pricing1-money',
      children: children.money,
    },
    content: {
      className: 'pricing1-content',
      children: children.content,
    },
    line: {
      className: 'pricing1-line',
    },
    buttonWrapper: {
      className: 'pricing1-button-wrapper',
      children: {
        a: {
          className: 'pricing1-button',
          href: '#',
          children: children.button,
        },
      },
    },
  },
});

class Pricing1 extends React.PureComponent {
  getChildrenToRender = (item) => {
    const { wrapper, topWrapper, name, buttonWrapper, line, content, money } = item.children;
    return (
      <Col
        key={item.name}
        {...item}
        /* replace-start */
        data-edit="Col"
        /* replace-end */
      >
        <QueueAnim type="bottom" {...wrapper}>
          <div {...topWrapper}>
            <div {...name} key="name">
              {
                /* replace-start-value = name.children */
                React.createElement('span', {
                  dangerouslySetInnerHTML: { __html: name.children },
                })
                /* replace-end-value */
              }
            </div>
            <h1 {...money} key="money">
              {
                /* replace-start-value = money.children */
                React.createElement('span', {
                  dangerouslySetInnerHTML: { __html: money.children },
                })
                /* replace-end-value */
              }
            </h1>
          </div>
          <div {...content} key="content">
            {
              /* replace-start-value = content.children */
              React.createElement('span', {
                dangerouslySetInnerHTML: { __html: content.children },
              })
              /* replace-end-value */
            }
          </div>
          <i {...line} key="line" />
          <div {...buttonWrapper} key="button">
            <Button
              {...buttonWrapper.children.a}
              /* replace-start */
              data-edit="link,text"
              /* replace-end */
            >
              {
                /* replace-start-value = buttonWrapper.children.a.children */
                React.createElement('span', {
                  dangerouslySetInnerHTML: { __html: buttonWrapper.children.a.children },
                })
                /* replace-end-value */
              }
            </Button>
          </div>
        </QueueAnim>
      </Col>
    );
  };

  render() {
    const { ...props } = this.props as any;
    const {
      dataSource = {
        wrapper: {
          className: 'home-page-wrapper pricing1-wrapper',
        },
        page: {
          className: 'home-page pricing1',
        },
        OverPack: {
          playScale: 0.3,
          className: 'pricing1-content-wrapper',
        },
        titleWrapper: {
          className: 'pricing1-title-wrapper',
          children: [
            {
              name: 'title',
              children: 'Price List',
              className: 'pricing1-title-h1',
            },
          ],
        },
        block: {
          className: 'pricing1-block-wrapper',
          children: [
            getBlock('block0', {
              button: 'Free Trial',
              money: '$0',
              name: 'Free',
              content: `<span>
            140-500Mbps<br/>
            140 GB-50TB (inclusive)<br/>
            14500GB data package<br/>
            14 domestic bills by peak broadband<br/>
            14Elastic Computing<br/>
            14 cloud server ECS
            </span>`,
            }),
            getBlock('block1', {
              wrapperClass: 'active',
              button: 'Buy Now',
              money: '$199',
              name: 'Starter',
              content: `<span>
            14500-5Gbps<br/>
            1410 GB-50TB (inclusive)<br/>
            141TB data package<br/>
            14 domestic bills by peak broadband<br/>
            14Elastic Computing<br/>
            Cloud server ECS
            </span>`,
            }),
            getBlock('block2', {
              button: 'Buy Now',
              money: '$999',
              name: 'Pro',
              content: `<span>
            14 greater than 5Gbps<br/>
            1450 GB-100TB (inclusive)<br/>
            145TB data package<br/>
            14 domestic bills by peak broadband<br/>
            14Elastic Computing<br/>
            14 cloud server ECS
            </span>`,
            }),
          ],
        },
      },
    } = props;

    delete props.dataSource;
    delete props.isMobile;
    const { block } = dataSource;
    const childrenToRender = block.children.map(this.getChildrenToRender);
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div
            key="title"
            {...dataSource.titleWrapper}
            /* replace-start */
            data-edit="titleWrapper"
            /* replace-end */
          >
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...dataSource.OverPack}>
            <QueueAnim
              type="bottom"
              component={Row}
              leaveReverse
              ease={['easeOutQuad', 'easeInOutQuad']}
              key="content"
              /* replace-start */
              data-edit="Row"
              /* replace-end */
            >
              {childrenToRender}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Pricing1;
