import React from "react";
import { TodoList } from "./TodoList";
import { TodoListClass } from "./TodoListClass";
import { useState } from "react";
import { MyName } from "./MyName";
import { NamePropDestructure } from "./PropDestructure";
import { ChildProp } from "./ChildProp";
import { TodoListItem } from "./TodoListItem";
import { TodoListItemClass } from "./TodoListItemClass";
import user from "./user.json";
// Importing css file
import "./style.css";
// Importing Image
// import img from "./Capture.png";
/****Function for lesson 17 to change state*/
function slowGetter() {
  //Really slow code
  return "SlowGetter useState Function runs once only";
}
function App() {
  /*
  Lesson 9: Thinking in components

  return React.createElement("h1", { id: "5" }, "Hello World");
  // Both, above and below statment writes same output.
  // return <h1 id="5">Hello World</h1>;
  // div with the class large and the id largeDiv with the text Hi
  // Remove the text hi
  // Add a label with the for prop set to inpuId adn any text
  // Add an input with the id inputId, type number, and value of 3 as a number.
  // To be able to allow the default value 3 use defaultValue={3} instead of value={3}
  Lesson 10 : JSX Basics
  return (
    <div className="large" id="largeDiv">
      <label htmlFor="inputId">First label</label>
      //Does not change value 3
      <input id="inputId" type="number" value={3} />
      //Allows to change value 3 to any number
      <input id="inputId" type="number" defaultValue={3} />
    </div>
  );
/**************L-17********************************* */
  /*
Lesson 17 useState Hook
useState needs to be stated initially in the function before anything else
*/
  // const [name, setName] = useState("useState");// defines the default initial useState value
  // const [name, setName] = useState(slowGetter()); // change the value by invoking function. This function runs every time when state is chagned.
  // const [name, setName] = useState(() => {
  //   console.log("inline useState function");
  //   return "useState invoked by inline function";
  // }); // changing above to inline funciton
  // const [name, setName] = useState(slowGetter); // change the value by invoking function. This function runs once at change state.
  const [name, setName] = useState("initial State"); // change the state.
  const [attempt, setAttempt] = useState(1); // change the state.

  //useState sets value as an Array
  /*
  const name = values[0] // first value of array
  const setName = values[1] // Second value of array
  */
  function handleClick() {
    // setName("useState Hook onClick value");// this state goes with slowGetter functions
    setName("modified State");

    /********Running Multiple states to increment the Attempts That does not work */
    // console.log("Before", attempt)
    //Incrementing initial attempt to 2
    // setAttempt(attempt + 1); //incrementing attempt on every click
    // console.log("After 1", attempt)
    //Hoping to increment the last value of attempt 2 to 3. That does not work. As the iniital value of the variable attempt states the same in first round of the whole function.
    // setAttempt(attempt + 1); //incrementing attempt on every click
    // console.log("After 2", attempt)

    /*******Correct way of incrementing is by using inline function */
    setAttempt((currentAttempt) => {
      return currentAttempt + 1;
    }); //incrementing attempt on every click
  }
  /**************L-17********************************* */

  //Lesson 11: Creating Components
  return (
    <div>
      <MyName name="Custom Name" age={45} />
      <h1>ToDo List</h1>
      <TodoListClass name="Item One" />
      <NamePropDestructure name="Prop Destructure Ex." isProgrammer={true} />
      <ChildProp>Children Prop Name</ChildProp>
      <TodoListItem
        isComplete={true}
        htmlFor="toDoList"
        name="listItem"
        value="item"
      >
        The list Item
      </TodoListItem>
      <br />
      <TodoListItemClass isComplete={true} name="Class Item One">
        The list Item Class
      </TodoListItemClass>
      {/* <img src={img} /> */}
      {/* JSON import */}
      <p>{JSON.stringify(user)}</p>
      {/* lesson17: useState */}
      <h1 onClick={handleClick}>
        Hi {name}
        Attemp: {attempt}
      </h1>
      ;
    </div>
  );
}

export default App;
