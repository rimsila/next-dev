import React, { useEffect, useState } from 'react';
import { NextButton } from '@wetrial/component';
import { AUTH_KEY, BASE_API_Graph_URL, nextRequest } from './util/request';
import { CoreRoot } from './util/root';
import { axios } from '../src/nextRequest';
import { getToken, setToken } from '../src/authority';

export default () => {
  const userRequestApiKey = async () => {
    const res = axios.post(BASE_API_Graph_URL, {
      query: `
          mutation RequestApiKey{
            requestApiKey(authKey: "${AUTH_KEY}"){
              apiKey
            }
          }
      `,
    });
    return res;
  };

  const userLogin = async (variables: any) => {
    return await nextRequest({
      data: {
        variables,
        query: `
        mutation UserLogin($password: String!, $username: String!){
          login(password: $password , username: $username){
           token
          }
        }
        `,
      },
    });
  };

  useEffect(() => {
    userRequestApiKey().then((res) => {
      setToken({
        refreshToken: res?.data?.data?.requestApiKey?.apiKey,
        token: getToken()?.token,
      });
    });
  }, []);

  const data = [
    {
      item: (
        <>
          <NextButton type="primary">Fetch User Name</NextButton>

          <NextButton
            mt={4}
            type="primary"
            onClick={() => {
              userLogin({
                username: 'admin',
                password: 'admin',
              }).then((res) => {
                console.log('444', res);
                setToken({
                  token: res?.login?.token,
                  refreshToken: getToken()?.refreshToken,
                });
              });
            }}
          >
            login
          </NextButton>
        </>
      ),
      copyCode: `await get('/users');`,
    },
  ];

  return (
    <>
      <CoreRoot data={data} />
    </>
  );
};
