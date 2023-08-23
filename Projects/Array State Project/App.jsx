import { useState } from "react";

function App() {
  /*1. Create state that stores an array with the initial value of ["A", "B", "C"]*/
  const [array, setArray] = useState(["A", "B", "C"]);
  /*2.  Add the ability to remove the first element from the array
    Changing new Value for the state but not chainging the Array value*/
  function removeFirstElement() {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  }
  /*3. Add the ability to remove a specific letter from the array */
  function removeSpecificLetter(letter) {
    setArray((currentArray) => {
      return currentArray.filter((item) => item !== letter);
    });
  }
  /*4. Add the ability to add a new element to the start of the array */
  function addAnElementToStart(letter) {
    setArray((currentArray) => {
      /***WRONG WAY */
      /*Modifying the initial array instead of creating a new array for React State. See below */
      // currentArray.push(letter) //Pushes a letter to end of the intial Array
      return [letter, ...currentArray];
    });
  }
  /*5. Add the ability to add a new element to the end of the Arrray */
  function addAnElementToEnd(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  }
  return (
    <>
      {/* Remove First Element */}
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br />
      <br />
      {/* Remove a Specific Letter */}
      <button onClick={() => removeSpecificLetter("B")}>Remove all B's</button>
      <br />
      <br />
      {/* Add a New Element to Array  Start*/}
      <button onClick={() => addAnElementToStart("Start")}>
        Add An Element to Start
      </button>
      <br />
      <br />
      {/* Add a New Element to Array */}
      <button onClick={() => addAnElementToEnd("End")}>
        Add An Element to End
      </button>
      <br />
      <br />
      {array.join(",")}
    </>
  );
}

export default App;
