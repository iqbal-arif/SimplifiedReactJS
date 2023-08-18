import { useState } from "react";

function App() {
  const [name, setName] = useState();
  //useState sets value as an Array
  /*
    const name = values[0] // first value of array
    const setName = values[1] // Second value of array
    */
  return <h1>Hi {name}</h1>;
}
export default App;
