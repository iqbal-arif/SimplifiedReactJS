import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  return (
    <>
      <h1>This is A Counter App</h1>
      <input type="text" value={value} />
      <br />
      <button>-</button>
      <span>0</span>
      <button>+</button>
    </>
  );
}

export default App;
