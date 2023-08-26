import { useState, useEffect } from "react";

export default function UseEffectHook() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  //Runs once when component is mounted
  useEffect(() => {
    console.log("Mounts");
  }, []);
  //Runs every time when name or age is changed
  useEffect(() => {
    console.log("Name or Age changed", { name, age });
  }, [name, age]);

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
