import React, { useState } from 'react';
import { NextButton } from '@wetrial/component';
import { message } from 'antd';
import { get, del } from '../src/nextRequest';
import { sleep } from '../src/utils';
import { CoreRoot } from './util/root';
import { useLockFn } from 'ahooks';

export default () => {
  const [value, setValue] = useState<{ name; id }>(null);
  const [loading, setLoading] = useState(false);
  const [loadingDel, setLoadingDel] = useState(false);

  const getUser = useLockFn(async () => {
    setLoading(true);
    const res: any = await get('/users');
    await sleep(100);
    message.success('fetched!', value?.name);

    if (res?.code === 200) {
      setValue(res?.data[0]);
    }
    setLoading(false);
  });

  const delUser = useLockFn(async () => {
    setLoadingDel(true);
    if (value?.id) {
      const res = await del(`/users/${value?.id}`);
      if (res?.code === 204) {
        setLoadingDel(false);
        await getUser();
        await sleep(700);
      } else {
        message.error(res?.data?.message);
      }
    } else {
      message.error("Don't have User Yet! click fetch first");
    }
    setLoadingDel(false);
  });

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
          <NextButton type="primary" next="error" onClick={delUser} loading={loadingDel}>
            Delete & Refetch
          </NextButton>
        </>
      ),
      copyCode: `await del(/users/12);`,
    },
  ];

  return (
    <>
      <CoreRoot data={data} />
    </>
  );
};
