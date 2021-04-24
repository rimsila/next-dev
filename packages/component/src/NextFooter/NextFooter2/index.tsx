import React, { memo, ReactNode } from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
/* replace-start-value = import { isImg } from './utils'; */
/* replace-end-value */
/* replace-start */
import './index.less';
/* replace-end */

type INextFooter2 = {
  dataSource: {
    copyright: {
      children: ReactNode;
    };
  };
};

export const NextFooter2 = memo((props: INextFooter2) => {
  const { dataSource } = props;

  return (
    <div {...props} className="home-page-wrapper footer0-wrapper">
      <OverPack
        {...{
          className: 'home-page footer0',
          playScale: 0.05,
        }}
      >
        <TweenOne
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          key="footer"
          {...dataSource.copyright}
        >
          {
            /* replace-start-value = dataSource.copyright.children */
            React.createElement('span', {
              dangerouslySetInnerHTML: { __html: dataSource.copyright.children },
            })
            /* replace-end-value */
          }
        </TweenOne>
      </OverPack>
    </div>
  );
});
