import { useState } from "react";

function CounterComponent() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("Arif");
  // const [name, setName] = useState("");

  // Name Funtion
  function nameSet(name) {
    return setName({ name });
  }

  return (
    <>
      <h1>This is A Counter App</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      <span>{age}</span>
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <br />
      <br />
      <p>
        My name is <h3>{name}</h3> and I am <h3>{age}</h3> years old.
      </p>
    </>
  );
}

export default CounterComponent;
