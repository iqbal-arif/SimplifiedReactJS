import { useState } from "react";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionCompnent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ClassComponent></ClassComponent>
      <br />
      <br />
      <FunctionComponent></FunctionComponent>
    </>
  );
}

export default App;
