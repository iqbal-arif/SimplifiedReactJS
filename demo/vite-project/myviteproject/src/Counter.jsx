import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0); // change the state.

  function handleClick() {
    setCount(count + 1);
  }
  //   return <h2 onClick={handleClick}>Counter {count}</h2>;

  //Condensed from of the above is
  return (
    <div onClick={() => setCount((currentCount) => currentCount + 1)}>
      Counter {count}
    </div>
  );
}
