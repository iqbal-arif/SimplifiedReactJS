import { useState } from "react";
import Child from "./Child";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>This is Component LifeCycle</h3>
      <Child />
    </>
  );
}

export default App;
