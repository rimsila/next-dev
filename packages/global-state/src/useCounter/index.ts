import { useState } from 'react';
import hoxAPI from 'sugar-hox-devtools';

function useCounter() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  return {
    count,
    decrement,
    increment,
    count1,
  };
}
useCounter.namespace = 'useCounter';

export default hoxAPI.createModel(useCounter);
