import React from "react";
import { useState } from "react";

export default function Input() {
  const [name, setName] = useState("Intial Input value");
  console.log({ name });

  return (
    <input
      type="text"
      defaultValue={name} // TO set default that can be modified by browser
      value={name} //Can only be modified if followed by onChange event
      onChange={(e) => setName(e.target.value)}
    />
  );
}
