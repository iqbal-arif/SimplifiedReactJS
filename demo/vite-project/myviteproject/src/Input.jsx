import React from "react";
import { useState } from "react";

function Input() {
  const { name, setName } = useState("Initial Value of Input");

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}

export default Input;
