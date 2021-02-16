import React from 'react';
import useCounterModel from '../../../global-state/src/useCounter';

export default function IndexPage() {
  const counter = useCounterModel();
  return (
    <div>
      <p> web-mobile {counter.count}</p>
      <button onClick={counter.increment} type="button">
        Increment
      </button>
    </div>
  );
}
