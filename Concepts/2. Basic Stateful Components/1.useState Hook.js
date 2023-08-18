import { useState } from "react";

function App() {
  const [name, setName] = useState("Arif");
  console.log("Render", name);
  //useState sets value as an Array
  /*
    const name = values[0] // first value of array
    const setName = values[1] // Second value of array
    */
  function handleClick() {
    setName("Iqbal");
  }
  // On click the entier component is re-render on state variable change
  return <h1 onClick={handleClick}>Hi {name}</h1>;
}
export default App;
