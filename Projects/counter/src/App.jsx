import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const []

  return (
    <>
      <h1>This is A Counter App</h1>
      <input type="text" value={value} />
      <br />
      <br />
      <button>-</button>
      <span>0</span>
      <button>+</button>
      <br />
      <br />
      <p>My name is {name} and I am 0 years old.</p>
    </>
  );
}

export default App;
