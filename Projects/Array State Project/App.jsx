import { useState } from "react";

function App() {
  const [array, setArray] = useState(["A", "B", "C"]);

  return (
    <>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br />
      <br />
      {array.join(",")}
    </>
  );
}

export default App;
