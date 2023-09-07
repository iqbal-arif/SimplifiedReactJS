import React from "react";
import { DisplayString } from "./DisplayString.jsx";
import { useState, useEffect } from "react";
//L34:Conditional Rendering
// Added {favoriteNumber}
export function FunctionComponent({ favoriteNumber }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  //L34: Don't want to print Text if favoriteNumber is not defined
  let jsx;
  if (favoriteNumber == null) {
    jsx = `My favorite number is ${favoriteNumber}`;
  }

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
      <br />
      <br />
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <br />
      <br />
      {/* L34:Conditional Rendering
      Added {favoriteNumber} */}
      <p>My favorite Number si {favoriteNumber}</p>
      <DisplayString name={name} age={age} />
    </div>
  );
}
