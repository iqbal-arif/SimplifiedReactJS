import { useState, useEffect } from "react";

export default function FunctionComponent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    document.title = name;
  }, [name]);

  return (
    <div>
      <h3>This is a Function Component</h3>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <br />
      <br />
      <DisplayString name={name} age={age} />
    </div>
  );
}
