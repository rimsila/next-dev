import React, { useState } from 'react';
import { NextButton } from '@wetrial/component';
import { message } from 'antd';
import { nextRequest } from './util/request';
import { sleep } from '../src/utils';
import { CoreRoot } from './util/root';
import { useLockFn, useRequest } from 'ahooks';

export default () => {
  const [value, setValue] = useState<{ name; id }>(null);
  const [loading, setLoading] = useState(false);
  const [loadingDel, setLoadingDel] = useState(false);

  const getUser = useLockFn(async () => {
    setLoading(true);
    const res: any = await nextRequest('GET', '/users', {
      fullTip: false,
      debug: true,
    });
    await sleep(100);
    // message.success('fetched!', value?.name);

    if (res?.code === 200) {
      setValue(res?.data[0]);
    }
    setLoading(false);
  });

  const delUser = useLockFn(async () => {
    setLoadingDel(true);
    if (value?.id) {
      const res = await nextRequest('DELETE', `/users/${value?.id}`);
      if (res?.code === 204) {
        setLoadingDel(false);
        await getUser();
        await sleep(700);
      } else {
        // message.error(res?.data?.message);
      }
    } else {
      // message.error("Don't have User Yet! click fetch first");
    }
    setLoadingDel(false);
  });

  //* ------------ Ahook ----------------
  const getUserApi = async () => {
    return await nextRequest('GET', '/users');
  };

  const { loading: loadUser, data: userData, run: getUserData, refresh: reFetchUser } = useRequest(
    getUserApi,
    {
      manual: true,
    },
  );

  const delUserApi = async (id: any) => {
    return await nextRequest('DELETE', `/users/${id}`);
  };

  const { loading: loadDelUser, run: runUserData } = useRequest(delUserApi, {
    manual: true,
    onSuccess: (res) => {
      if (res?.code === 204) {
        // message.success('deleted user successfully');
        reFetchUser();
      }
    },
  });

  const onDelUserData = () => {
    if (userData?.data[0].id) {
      runUserData(userData?.data[0].id);
    } else {
      // message.info('please fetch user first!');
    }
  };

  const data = [
    {
      item: (
        <>
          <h4>Welcome {value?.name || '_ _ _ _ _ _ _ _ _'} </h4>
          <NextButton type="primary" onClick={() => getUser()} loading={loading && !loadingDel}>
            Fetch User Name
          </NextButton>
        </>
      ),
      copyCode: `await get('/users');`,
    },
    {
      item: (
        <>
          <h4>Delete me? {value?.name || '_ _ _ _ _ _ _ _ _'} </h4>
          <NextButton type="primary" nextTheme="btn_error" onClick={delUser} loading={loadingDel}>
            Delete & Refetch
          </NextButton>
        </>
      ),
      copyCode: `await del(/users/12);`,
    },
    {
      item: (
        <>
          <h4>fetch name: {userData?.data[0].name || '_ _ _ _ _ _ _ _ _'} </h4>
          <NextButton
            type="primary"
            nextTheme="btn_cyan_base"
            onClick={getUserData}
            loading={loadUser}
          >
            Fetch using Ahook
          </NextButton>
        </>
      ),
      copyCode: `
      const getUserApi = async () => {
        return await get('/users');
      };
    
      const { loading: loadUser, data: userData, run: getUserData, refresh: reFetchUser } = useRequest(
        getUserApi,
        {
          manual: true,
        },
      );
      
      `,
    },
    {
      item: (
        <>
          <h4>fetch name: {userData?.data[0].name || '_ _ _ _ _ _ _ _ _'} </h4>
          <NextButton
            type="primary"
            nextTheme="btn_success"
            onClick={onDelUserData}
            loading={loadDelUser}
          >
            Delete and reFetch using Ahook
          </NextButton>
        </>
      ),
      copyCode: `  
      const delUserApi = async (id: any) => {
        return await del("/users/"+ id);
      };
      const { loading: loadDelUser, run: runUserData } = useRequest(delUserApi, {
        manual: true
      }`,
    },
  ];

  console.log('userData', userData);

  return (
    <>
      <CoreRoot data={data} />
    </>
  );
};
