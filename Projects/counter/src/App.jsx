import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("Arif");
  // const [name, setName] = useState("");

  // Name Funtion
  function nameSet(name) {
    return setValue({ name });
  }

  return (
    <>
      <h1>This is A Counter App</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setCount((currentCount) => currentCount - 1)}>
        -
      </button>
      <span>0</span>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        +
      </button>
      <br />
      <br />
      <p>
        My name is {value} and I am {count} years old.
      </p>
    </>
  );
}

export default App;
