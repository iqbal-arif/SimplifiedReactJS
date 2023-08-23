import { useState } from "react";

function App() {
  /*1. Create state that stores an array with the initial value of ["A", "B", "C"]*/
  const [array, setArray] = useState(["A", "B", "C"]);
  /*2.  
    Changing new Value for the state but not chainging the Array value*/
  function removeFirstElement() {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  }
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
