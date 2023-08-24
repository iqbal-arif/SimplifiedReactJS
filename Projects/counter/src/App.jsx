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
      <input
        value={() => {
          setValue();
        }}
        onChange={value}
      />
      <br />
      <br />
      <button>-</button>
      <span>0</span>
      <button>+</button>
      <br />
      <br />
      <p>My name is {value} and I am 0 years old.</p>
    </>
  );
}

export default App;
