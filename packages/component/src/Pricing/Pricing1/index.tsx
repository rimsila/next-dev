import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import { getChildrenToRender } from '../../utils/common';

import './index.less';
import { ShoppingCartOutlined } from '@ant-design/icons';

function Pricing1(props) {
  const { ...tagProps } = props;

  const staticData = {
    wrapper: {
      className: 'home-page-wrapper pricing0-wrapper',
    },
    OverPack: {
      playScale: 0.3,
      className: 'home-page pricing0',
    },
    imgWrapper: {
      className: 'pricing0-img-wrapper',
      md: 12,
      xs: 24,
    },
    img: {
      className: 'pricing0-img',
      name: 'image',
      children: 'https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-8t-lunar.jpg',
    },
    childWrapper: {
      className: 'pricing0-text-wrapper',
      md: 12,
      xs: 24,
      children: [
        {
          name: 'title',
          children: 'One Plus 8T',
          className: 'pricing0-title',
        },
        {
          name: 'content',
          children: `Centralized orchestration of cloud resources, elastic scaling, continuous release and deployment, high availability and disaster tolerance. A complete cloud security system built in accordance with the security requirements of financial enterprises to fully guarantee the security of financial applications and data. <br/>
      500-5Gbps, 10 GB-50TB (inclusive), 1TB flow package, domestic peak value.
      `,
          className: 'pricing0-content',
        },
        {
          name: 'pricing',
          children: '$2,200',
          className: 'pricing0-pricing',
        },
        {
          name: 'button',
          // onClick: () => console.log('dd'),

          children: {
            icon: <ShoppingCartOutlined />,
            href: '#',
            type: 'primary',
            children: 'Buy Now',
          },
        },
      ],
    },
  };
  const { dataSource = staticData, isMobile } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;
  const animType = {
    queue: isMobile ? 'bottom' : 'right',
    one: isMobile
      ? {
          scaleY: '+=0.3',
          opacity: 0,
          type: 'from',
          ease: 'easeOutQuad',
        }
      : {
          x: '-=30',
          opacity: 0,
          type: 'from',
          ease: 'easeOutQuad',
        },
  };

  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <OverPack
        component={Row}
        {...dataSource.OverPack}
        /* replace-start */
        data-edit="Row,OverPack"
        /* replace-end */
      >
        <TweenOne
          key="img"
          animation={animType.one}
          resetStyle
          {...dataSource.imgWrapper}
          component={Col}
          componentProps={{ md: dataSource.imgWrapper.md, xs: dataSource.imgWrapper.xs }}
          /* replace-start */
          data-edit="Col"
          /* replace-end */
        >
          <span {...dataSource.img}>
            <img src={dataSource.img.children} width="100%" alt="img" />
          </span>
        </TweenOne>
        <QueueAnim
          key="text"
          type={animType.queue}
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
          {...dataSource.childWrapper}
          component={Col}
          componentProps={{ md: dataSource.childWrapper.md, xs: dataSource.childWrapper.xs }}
          /* replace-start */
          data-edit="Col,childWrapper"
          /* replace-end */
        >
          {dataSource.childWrapper.children.map(getChildrenToRender)}
        </QueueAnim>
      </OverPack>
    </div>
  );
}

export default Pricing1;
