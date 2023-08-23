// import { element } from "prop-types";
import { useState } from "react";
/***Initial Array Value */

const INITIAL_VALUE = ["A", "B", "C"];
function App() {
  /*1. Create state that stores an array with the initial value of ["A", "B", "C"]*/
  /**USESTATE */
  const [array, setArray] = useState(INITIAL_VALUE);
  const [value, setValue] = useState("");
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
  /*6. Add the ability to Clear an Arrray */
  function clearArray() {
    setArray((currentArray) => {
      setArray([]);
    });
  }
  /*7. Add the ability to Reset an Arrray */
  function resetArray() {
    setArray(INITIAL_VALUE);
  }
  /**BONUS**/
  /*7. Add the ability to Update all "A" Element in the array to H */
  function updateAtoH() {
    setArray((currentArray) => {
      return currentArray.map((letter) => (letter === "A" ? "H" : letter));
    });
  }
  /*8. Add an Input that is connected to state and a button that will add the input value to the start of the array */

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
      {/* Add a New Element to Array  End*/}
      <button onClick={() => addAnElementToEnd("End")}>
        Add An Element to End
      </button>
      <br />
      <br />
      {/* Clear an Array*/}
      <button onClick={clearArray}>Clear an Array</button>
      <br />
      <br />
      {/* Reset an Array*/}
      <button onClick={resetArray}>Reset an Array</button>
      <br />
      <br />
      {/* BONUS */}
      {/* Update A to H*/}
      <button onClick={updateAtoH}>Upddate A to H</button>
      <br />
      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      ;
      <br />
      <br />
      <button onClick={addAnElementToStart}>Add Value to Array</button>
      {array ? array.join(",") : null}
      {/* {array.join(",")} */}
    </>
  );
}

export default App;
