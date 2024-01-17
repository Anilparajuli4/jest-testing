import { useState } from "react";

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState<number>(value);
  function increment() {
    setCount((prev: number) => prev + 1);
  }
  function decrement() {
    setCount((prev: number) => prev - 1);
  }
  function restart() {
    setCount(0);
  }
  function switchSigns() {
    setCount((prev: number) => prev * -1);
  }
  return (
    <div>
      <h1>
        Count: <span data-testid="count">{count}</span>
      </h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={restart}>Restart</button>
        <button onClick={switchSigns}>Switch signs</button>
      </div>
    </div>
  );
}

export default Counter;
