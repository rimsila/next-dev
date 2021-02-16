import React, { useState } from 'react';
import useCounterModel from '../../../global-state/src/useCounter';
import sugar from 'sugar-hox-devtools';

const { SugarHoxDevTools } = sugar;

export default function IndexPage() {
  const [showDevTools, setShowDevTools] = useState(false);

  const counter = useCounterModel();
  console.log('log', window.sugarHox);

  return (
    <div>
      {showDevTools && (
        <SugarHoxDevTools onClose={() => setShowDevTools(false)} />
      )}
      <p> web-app {counter.count}</p>
      <button onClick={counter.increment} type="button">
        Increment
      </button>
    </div>
  );
}
