import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col, Divider } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
/* replace-start-value = import { getChildrenToRender, isImg } from './utils'; */
import { getChildrenToRender } from '../../utils/common';
/* replace-end-value */
/* replace-start */
import './index.less';
/* replace-end */

class Teams3 extends React.PureComponent {
  getBlockChildren = (data) =>
    data.map((item, i) => {
      const { titleWrapper, image, ...$item } = item;
      return (
        <Col
          key={i.toString()}
          {...$item}
          /* replace-start */
          data-edit="Col, titleWrapper"
          /* replace-end */
        >
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
        <Col
          key={i.toString()}
          {...$item}
          /* replace-start */
          data-edit="Col, titleWrapper"
          /* replace-end */
        >
          {titleWrapper.children.map(getChildrenToRender)}
        </Col>
      );
    });

  render() {
    const { ...props } = this.props as any;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;

    const staticData = {
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
            // @ts-ignore

            children: this.props.sectionTitle,
          },
        ],
      },
    };

    const listChildren = this.getBlockChildren(dataSource.block.children);
    const listTopChildren = this.getBlockTopChildren(dataSource.blockTop.children);
    return (
      <div {...props} {...staticData.wrapper}>
        <div {...dataSource.page}>
          <div
            {...staticData.titleWrapper}
            /* replace-start */
            data-edit="titleWrapper"
            /* replace-end */
          >
            {staticData.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...staticData.OverPack}>
            <QueueAnim type="bottom" key="tween" leaveReverse>
              <QueueAnim
                type="bottom"
                key="blockTop"
                {...dataSource.blockTop}
                component={Row}
                /* replace-start */
                data-edit="Row"
                /* replace-end */
              >
                {listTopChildren}
              </QueueAnim>
              <Divider key="divider" />
              <QueueAnim
                type="bottom"
                key="block"
                {...dataSource.block}
                component={Row}
                /* replace-start */
                data-edit="Row"
                /* replace-end */
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

export default Teams3;
