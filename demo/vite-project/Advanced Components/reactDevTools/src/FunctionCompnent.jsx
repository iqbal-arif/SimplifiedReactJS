import React from "react";
import { DisplayString } from "./DisplayString.jsx";
import { useState, useEffect } from "react";
//L34:Conditional Rendering
// Added {favoriteNumber}
export function FunctionComponent({ favoriteNumber }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  //L34: Don't want to print Text if favoriteNumber is not defined
  //METHOD - 1: for no show if props is not defined
  // let jsx;
  // if (favoriteNumber != null) {
  //   jsx = `My favorite number is ${favoriteNumber}`;
  // }

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
      {/* <p>My favorite Number is {favoriteNumber}</p> */}
      {/* METHOD - 1: for no show if props is not defined */}
      {/* {jsx} */}
      {/* METHOD -2: INLINE RENDERING */}
      {/* If favoriteNumber is not NULL then print the following statement. */}
      {/*Adding !! next to favoriteNumber makes that into boolean  */}
      {/* {!!favoriteNumber != null && `My favorite Number is ${favoriteNumber}`} */}
      {favoriteNumber > 5
        ? "My favorite number is large"
        : "My favorite number is small"}
      <DisplayString name={name} age={age} />
    </div>
  );
}
