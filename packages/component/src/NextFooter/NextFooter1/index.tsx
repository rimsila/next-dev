import React, { memo } from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
/* replace-start-value = import { isImg } from './utils'; */
import { Regex } from '../../../../core/src/regexp';
/* replace-end-value */
/* replace-start */
import './index.less';
/* replace-end */

type INextFooter1 = {
  dataSource: {
    links?: {
      children: any[];
    };
    copyright: {
      children: any[];
    };
  };
};

export const NextFooter1 = memo((props: INextFooter1) => {
  const { dataSource } = props;

  return (
    <div
      {...props}
      {...{
        className: 'home-page-wrapper footer2-wrapper',
      }}
    >
      <OverPack
        {...{
          className: 'home-page footer2',
          playScale: 0.05,
        }}
      >
        <TweenOne {...dataSource?.links}>
          {dataSource?.links?.children.map((item, i) => {
            return (
              <a
                key={i.toString()}
                {...item}
                /* replace-start */
                data-edit="link,image"
                /* replace-end */
              >
                <img src={item.children} height="100%" alt="img" />
              </a>
            );
          })}
        </TweenOne>
        <TweenOne
          animation={{ x: '+=30', opacity: 0, type: 'from' }}
          key="copyright"
          {...dataSource.copyright}
          /* replace-start */
          data-edit="textAndImage"
          /* replace-end */
        >
          {dataSource.copyright.children.map((item, i) =>
            React.createElement(
              item.name.indexOf('title') === 0 ? 'h1' : 'div',
              { key: i.toString(), ...item },
              typeof item.children === 'string' && item.children.match(Regex.isImg)
                ? React.createElement('img', { src: item.children, alt: 'img' })
                : /* replace-start-value = item.children */ React.createElement('span', {
                    dangerouslySetInnerHTML: { __html: item.children },
                  }),
              /* replace-end-value */
            ),
          )}
        </TweenOne>
      </OverPack>
    </div>
  );
});
