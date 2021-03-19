import React from 'react';
import { MapItem, ProfileCard } from '../../src';

export default () => {
  const data = [
    {
      item: (
        <ProfileCard
          {...{
            type: 'style1',
            data: {
              avatar:
                'https://avatars.githubusercontent.com/u/51617383?s=400&u=59f471da8c7efa0fde0d34652dde3635a6ff9b9f&v=4',
              name: 'Sila Rim',
              sub1: '32342 posts',
              sub2: '4235 likes',
              socialData: [
                {
                  name: 'facebook',
                  iconType: 'icon-facebook1',
                },
                {
                  name: 'github',
                  iconType: 'icon-list-icon-github',
                },
              ],
            },
          }}
        />
      ),
      copyCode: `<NextButton type="primary">Primary Button</NextButton>`,
    },
  ];

  return <MapItem {...{ data, antSpan: 10, gut1: 50 }} />;
};
