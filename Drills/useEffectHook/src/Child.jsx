import { useState, useEffect } from "react";

export function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  // My Answer: this is wrong it should have been in the useEffect fucntion
  // console.log("Render");
  //Instructor Answer
  //1. Re-Render evertime component changes
  useEffect(() => {
    //1. `console.log` the text **Render** each time the component re-renders
    console.log("Re-Render");
  });
  //Instructor Answer
  //2. Render **Hi** when the component mounts
  useEffect(() => {
    //2. `console.log` the text **Hi** when the component mounts
    console.log("Hi");
    //Bonus: Render "Bye" on unmount
    // Should be done on empty array, becuase it runs only once and at unmounts it should run at that time.
    return () => {
      console.log("Bye");
    };
  }, []);

  //3. `console.log` the text **My name is {name} and I am {age} years old** whenever the `name` or `age` changes
  useEffect(() => {
    //Runs every time when name or age is changed
    console.log(`My name is ${name} and I am ${age} years old`);
  }, [name, age]);

  //4. Update the `document.title` to be equal to `name` whenever the `name` changes
  useEffect(() => {
    document.title = name;
    //Teacher Answer
    //Bounus: Settimeout
    const timeOut = setTimeout(() => {
      console.log(`My name is ${name}`);
    }, 1000);
    //The followin return =()functions allows a log delay and once the key is stopped it displays that portion of input. Otherwise user typing shows on the screen, but does not log to console until next delay
    return () => {
      clearTimeout(timeOut);
    };
  }, [name]);

  /* useEffect(() => {

    //My Answer
    //Bonus: Set TimeOut Printing delay on console done wrongly
    // I ADDED EVENT Handler which is not required

    const handler = () => {
      setTimeout(() => {
        name;
        console.log(name);
      }, 1000);
    };
    /*
    //My Answer
    // Bonus: Settimeout: Event invokes everytime when
    document.addEventListener("keydown", handler);*/
  // console.log("Key has been Pressed");
  /*
    //2. My Answer
    //Runs once when component is mounted
    console.log("Hi");*/
  /*
    //3. My Answer
    //Runs every time when name or age is changed
    console.log(`My name is ${name} and I am ${age} years old`);*/
  /*
    //4. My Answer
    //Changes doucment title when input is changed
    document.title = name;*/

  // My Answer done wrongly
  //Use of return function will unmount the component
  /*return () => {
      // My Answer
      //Bonus: Set Timeout done wrongly
      document.removeEventListener("keydown", handler);*/
  /*
      //5. Render "Bye" on unmount. this is done wrongly
      console.log("Bye");*/
  //   };
  // }, [name, age]);

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
      {/* My Answer Not Needed */}
      {/* <br />
      <br />
      <p>Set Timeout</p>
      My name is {name} */}
    </div>
  );
}
