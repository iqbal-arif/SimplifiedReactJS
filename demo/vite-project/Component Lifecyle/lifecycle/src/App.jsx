import { useState } from "react";
import Child from "./Child";
import ShowHide from "./ShowHide";
function App() {
  const [count, setCount] = useState(0);
  const [isShown, setIsShown] = useState(true);

  const childComponent = isShown ? <ShowHide /> : null;

  console.log("Rendering Parent");
  return (
    <>
      <button
        style={{ display: "block", marginBottom: "1rem" }}
        onClick={() => setIsShown((s) => !s)}
      >
        Show / Hide
      </button>
      {childComponent}
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
