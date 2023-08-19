import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0); // change the state.

  function handleClick() {
    setCount(count + 1);
  }
  return <h2 onClick={handleClick}>Counter {count}</h2>;
}
