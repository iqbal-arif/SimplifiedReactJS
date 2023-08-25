import { useState } from "react";
export default function ShowHide() {
  <p>This is Child Component</p>;
  const [name, setName] = useState("");
  console.log("Rendering Show Hide");
  return (
    <div className="child">
      <h2>Show Hide Child Component</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      My name is {name}
    </div>
  );
}
