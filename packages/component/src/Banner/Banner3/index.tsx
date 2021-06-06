import React from 'react';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one/es/TweenOne';
import TweenOneGroup from 'rc-tween-one/es/TweenOneGroup';
import BannerAnim, { Element } from 'rc-banner-anim';
/* replace-start-value = import { isImg } from './utils'; */
import { isImg } from '../../utils/common';
/* replace-end-value */
import 'rc-banner-anim/assets/index.css';
/* replace-start */
import './index.less';
/* replace-end */

const { BgElement } = Element;

class Banner3 extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const {
      dataSource = {
        wrapper: {
          className: 'banner2',
        },
        BannerAnim: {
          children: [
            {
              name: 'elem0',
              BannerElement: {
                className: 'banner-user-elem',
              },
              page: {
                className: 'home-page banner2-page',
              },
              textWrapper: {
                className: 'banner2-text-wrapper',
              },
              bg: {
                className: 'bg bg0',
              },
              title: {
                className: 'banner2-title',
                children: 'Ant Motion',
              },
              content: {
                className: 'banner2-content',
                children: 'An efficient page animation solution',
              },
              button: {
                className: 'banner2-button',
                children: 'Learn More',
              },
            },
          ],
        },
      },
      isMobile,
    } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = dataSource.BannerAnim.children.map((item, i) => {
      const elem = item.BannerElement;
      const elemClassName = elem.className;
      delete elem.className;
      const { bg } = item;
      const { textWrapper } = item;
      const { title } = item;
      const { content } = item;
      const { button } = item;
      const { page } = item;
      const follow = !isMobile
        ? {
            delay: 1000,
            minMove: 0.1,
            data: [
              {
                id: `bg${i}`,
                value: 15,
                type: 'x',
              },
              { id: `wrapperBlock${i}`, value: -15, type: 'x' },
            ],
          }
        : null;
      return (
        <Element key={i.toString()} followParallax={follow} {...elem} prefixCls={elemClassName}>
          <BgElement key="bg" {...bg} id={`bg${i}`} />
          <div {...page}>
            <QueueAnim
              type={['bottom', 'top']}
              delay={200}
              key="text"
              {...textWrapper}
              id={`wrapperBlock${i}`}
            >
              <div
                key="logo"
                {...title}
                /* replace-start */
                data-edit="text,image"
                /* replace-end */
              >
                {
                  typeof title.children === 'string' && title.children.match(isImg) ? (
                    <img src={title.children} width="100%" alt="img" />
                  ) : (
                    /* replace-start-value = title.children */ React.createElement('span', {
                      dangerouslySetInnerHTML: { __html: title.children },
                    })
                  )
                  /* replace-end-value */
                }
              </div>
              <div key="content" {...content}>
                {
                  /* replace-start-value = content.children */
                  React.createElement('span', {
                    dangerouslySetInnerHTML: { __html: content.children },
                  })
                  /* replace-end-value */
                }
              </div>
              <Button
                type="ghost"
                key="button"
                {...button}
                /* replace-start */
                data-edit="link,text"
                /* replace-end */
              >
                {
                  /* replace-start-value = button.children */
                  React.createElement('span', {
                    dangerouslySetInnerHTML: { __html: button.children },
                  })
                  /* replace-end-value */
                }
              </Button>
            </QueueAnim>
          </div>
        </Element>
      );
    });
    return (
      <div {...props} {...dataSource.wrapper}>
        <TweenOneGroup
          key="bannerGroup"
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=""
        >
          <BannerAnim
            key="BannerAnim"
            {...dataSource.BannerAnim}
            /* replace-start */
            ref={(c) => {
              this.banner = c;
            }}
            /* replace-end */
          >
            {childrenToRender}
          </BannerAnim>
        </TweenOneGroup>
        <TweenOne
          animation={{
            y: '-=20',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner2-icon"
          style={{ bottom: 40 }}
          key="icon"
        >
          <DownOutlined />
        </TweenOne>
      </div>
    );
  }
}

export default Banner3;
