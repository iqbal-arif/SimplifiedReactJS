import { useState } from "react";
export default function Child() {
  <p>This is Child Component</p>;
  const [name, setName] = useState("");
  console.log("Rendering Child");
  return (
    <div className="child">
      <h2>Child Component</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      My name is {name}
    </div>
  );
}
