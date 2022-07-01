import { useState } from 'react';

const UseStateHook = () => {
  const [count, setCount] = useState(100)
  return (
    <div>
      <h1>{count}</h1>
      <button
        // onClick={() => setCount(count + 1)}
        onClick={() => setCount(prevState => prevState + 1)}
      >
        <span>+</span>
      </button>
    </div>
  );
}

export default UseStateHook;
