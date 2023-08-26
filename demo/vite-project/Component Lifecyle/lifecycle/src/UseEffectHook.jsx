import { useState, useEffect } from "react";

export default function UseEffectHook() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  //Runs once when component is mounted
  useEffect(() => {
    console.log("Mounts");
  }, []);
  //Runs every time when name or age is changed
  useEffect(() => {
    console.log("Name or Age changed", { name, age });
  }, [name, age]);
  //Changes doucment title when input is changed
  useEffect(() => {
    document.title = name;
  }, [name]);
  // Width of the browser changes with resizing.
  useEffect(() => {
    const handler = () => {
      console.log(name);
    };
    //For Resizing Window Event
    // window.addEventListener("resize", () => {
    //   const newWidth = setWidth(window.innerWidth);
    //   console.log(newWidth);
    // });
    // Event invokes everytime when
    document.addEventListener("click", handler);
    console.log("Added Eveent");

    return () => {
      document.removeEventListener("click", handler);
    };
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
      {/* Browser's Width */}
      {width}
    </>
  );
}
