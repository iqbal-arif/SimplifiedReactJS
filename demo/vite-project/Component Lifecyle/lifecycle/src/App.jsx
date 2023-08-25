import { useState } from "react";
import Child from "./Child";
function App() {
  const [count, setCount] = useState(0);
  const [isShown, setIsShown] = useState(true);

  console.log("Rendering Parent");
  return (
    <>
      <button
        style={{ display: "block", marginBottom: "1rem" }}
        onClick={() => setCount((c) => c + 1)}
      >
        {count}
      </button>
      <br />
      <br />
      <button
        style={{ display: "block", marginBottom: "1rem" }}
        onClick={() => setCount((c) => c + 1)}
      >
        {count}
      </button>
      <Child />
    </>
  );
}

export default App;
