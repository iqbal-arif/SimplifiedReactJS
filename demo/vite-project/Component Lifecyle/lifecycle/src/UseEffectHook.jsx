import { useState, useEffect } from "react";

export default function UseEffectHook() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("Name or Age changed", { name });
  }, [name]);

  return (
    <>
      <h3>This is UseEffect Hook Example</h3>
      <button
        style={{ display: "block", marginBottom: "1rem" }}
        onClick={() => setAge((c) => c + 1)}
      >
        {age}
      </button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      My name is {name}
    </>
  );
}
