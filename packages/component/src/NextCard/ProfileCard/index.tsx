import IconFont from '../../IconFont/index';
import { Space } from 'antd';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import React, { memo } from 'react';
import './index.less';

//* ------ defaultData -------- */
const defaultData = {
  avatar: '',
  name: '',
  sub1: '',
  sub2: '',
  socialData: [],
};

//* ------ IProfileProps -------- */
type IProfileProps = {
  type: 'style1';
  data: typeof defaultData;
};

//* ------ ProfileCard -------- */
export const ProfileCard = memo((props: IProfileProps) => {
  const { type, data = defaultData } = props;
  const { avatar, name, sub1, sub2, socialData = [] } = data || {};

  return (
    <div className={classNames('profile_card')}>
      {/* //* ------ start card -------- */}
      <div className="card">
        {type === 'style1' && (
          <>
            <img src={avatar} alt="Person" className="card__image" />
            {name && <p className="card__name">{name}</p>}
            <div className="grid-container">
              {sub1 && <div className="grid-child-posts">{sub1}</div>}
              {sub2 && <div className="grid-child-followers">{sub2}</div>}
            </div>

            {!isEmpty(socialData) && (
              <ul className="social-icons">
                {socialData?.map((v, i) => {
                  return (
                    <Space key={i} direction="horizontal" size="large">
                      <IconFont type={v?.iconType} className="mr-10" />
                    </Space>
                  );
                })}
              </ul>
            )}

            <button type="button" className="btn draw-border">
              Follow
            </button>
            <button type="button" className="btn draw-border">
              Message
            </button>
          </>
        )}
      </div>
      {/* //* ------ end card -------- */}
    </div>
  );
});
