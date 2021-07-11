import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
/* replace-start-value = import { getChildrenToRender, isImg } from './utils'; */
import { getChildrenToRender } from '../../utils/common';
/* replace-end-value */
/* replace-start */
import './index.less';
/* replace-end */

class Teams1 extends React.PureComponent {
  getBlockChildren = (data) =>
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
    const titleWrapper = {
      className: 'title-wrapper',
      children: [
        {
          name: 'title',
          // @ts-ignore
          children: this.props.sectionTitle,
        },
      ],
    };
    const page = {
      className: 'home-page teams1',
    };

    const overPack = {
      playScale: 0.3,
      className: '',
    };

    const { dataSource = {} } = props;
    delete props.dataSource;
    delete props.isMobile;
    const listChildren = this.getBlockChildren(dataSource.block.children);

    return (
      <div {...props} className="home-page-wrapper teams1-wrapper">
        <div {...page}>
          <div
            {...titleWrapper}
            /* replace-start */
            data-edit="titleWrapper"
            /* replace-end */
          >
            {titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...overPack}>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              {...dataSource.block}
              component={Row}
              /* replace-start */
              data-edit="Row"
              /* replace-end */
            >
              {listChildren}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Teams1;
