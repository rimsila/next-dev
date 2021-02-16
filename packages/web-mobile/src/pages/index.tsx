import { LAYOUT_COL_AUTH } from '../../../core/src/constants';
import React from 'react';
import styles from './index.less';

export default function IndexPage() {
  console.log('LAYOUT_COL_AUTH', LAYOUT_COL_AUTH);

  return (
    <div>
      <h1 className={styles.title}>{JSON.stringify(LAYOUT_COL_AUTH)}</h1>
    </div>
  );
}
