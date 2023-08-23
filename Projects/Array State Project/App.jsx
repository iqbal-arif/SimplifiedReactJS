import { useState } from "react";

function App() {
  /*1. Create state that stores an array with the initial value of ["A", "B", "C"]*/
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
