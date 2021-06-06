import React from 'react';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { isImg } from '../../utils/common';
import './index.less';

class Banner1 extends React.PureComponent {
  render() {
    const { ...currentProps } = this.props;
    const {
      dataSource = {
        wrapper: {
          className: 'banner0',
        },
        textWrapper: {
          className: 'banner0-text-wrapper',
        },
        title: {
          className: 'banner0-title',
          children: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner0-content',
          children: 'An efficient page animation solution',
        },
        button: {
          className: 'banner0-button',
          children: 'Learn More',
        },
      },
    } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <QueueAnim key="QueueAnim" type={['bottom', 'top']} delay={200} {...dataSource.textWrapper}>
          <div key="title" {...dataSource.title} data-edit="text,image">
            {
              typeof dataSource.title.children === 'string' &&
              dataSource.title.children.match(isImg) ? (
                <img src={dataSource.title.children} width="100%" alt="img" />
              ) : (
                /* replace-start-value = dataSource.title.children */ React.createElement('span', {
                  dangerouslySetInnerHTML: { __html: dataSource.title.children },
                })
              )
              /* replace-end-value */
            }
          </div>
          <div key="content" {...dataSource.content}>
            {React.createElement('span', {
              dangerouslySetInnerHTML: { __html: dataSource.content.children },
            })}
          </div>
          <Button ghost key="button" {...dataSource.button} data-edit="link,text">
            {React.createElement('span', {
              dangerouslySetInnerHTML: { __html: dataSource.button.children },
            })}
          </Button>
        </QueueAnim>
        <TweenOne
          animation={{
            y: '-=20',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner0-icon"
          key="icon"
        >
          <DownOutlined />
        </TweenOne>
      </div>
    );
  }
}
export default Banner1;
