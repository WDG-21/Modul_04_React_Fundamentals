import { useState } from 'react';

function State() {
  const [count, setCount] = useState(0);
  console.log('re-rendered');

  return (
    <div>
      <h2>useState</h2>
      <p>Current value: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>RESET</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default State;
