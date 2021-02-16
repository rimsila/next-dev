import React from 'react';
import styles from './index.less';
import { LAYOUT_COL_AUTH } from '../../../core/src/constants';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>{JSON.stringify(LAYOUT_COL_AUTH)}</h1>
    </div>
  );
}
