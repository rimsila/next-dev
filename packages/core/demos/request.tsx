import React, { useState } from 'react';
import { NextButton } from '@wetrial/component';
import { nextRequest } from './util/request';
import { CoreRoot } from './util/root';

export default () => {
  const [data, setData] = useState<any>({});

  const FetchPost = async (variables: { id?: string }) => {
    return await nextRequest({
      data: {
        variables,
        query: `
        query FetchPost($id: ID!){
          post(id: $id){
           id
           title
           body
          }
        }
        `,
      },
    }).then((res) => {
      console.log('res1', res);
      setData(res?.post);
    });
  };

  const data1 = [
    {
      item: (
        <>
          <NextButton
            mt={4}
            type="primary"
            nextTheme="btn_cyan_8"
            onClick={() =>
              FetchPost({
                id: '1',
              })
            }
          >
            Fetch Title: {data?.title ? data?.title?.substring(0, 15) : '______'}
          </NextButton>
        </>
      ),
      copyCode: `const FetchPost = async (variables: { id?: string }) => {
        return await nextRequest({
          data: {
            variables,
            query: 'query FetchPost($id: ID!){
              post(id: $id){
               id
               title
               body
              }
            }
            ' // change it to template string
          },
        }).then((res) => {
          console.log('res1', res);
          setData(res?.post);
        })
      }`,
    },
  ];

  return (
    <>
      <CoreRoot data={data1} />
    </>
  );
};
