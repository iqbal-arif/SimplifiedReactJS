import { useState, useEffect } from "react";

export function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  console.log("Render");

  useEffect(() => {
    //Runs once when component is mounted
    console.log("Hi");
    //Runs every time when name or age is changed
    console.log(`My name is ${name} and I am ${age} years old`);
    //Changes doucment title when input is changed
    document.title = name;
    //Use of return function will unmount the component
    return () => {
      // document.removeEventListener("click", handler);
      console.log("Remove Event");
    };
  }, [name, age]);

  // useEffect(() => {
  //   console.log("Bye");
  // }, []);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((a) => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge((a) => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  );
}
