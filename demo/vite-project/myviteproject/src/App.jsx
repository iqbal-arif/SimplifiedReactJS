import React from "react";
import { TodoList } from "./TodoList";
import { TodoListClass } from "./TodoListClass";
import { MyName } from "./MyName";
import { NamePropDestructure } from "./PropDestructure";
import { ChildProp } from "./ChildProp";
import { TodoListItem } from "./TodoListItem";
import { TodoListItemClass } from "./TodoListItemClass";
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
  */

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
      <TodoListItemClass isComplete={true}>
        The list Item Class
      </TodoListItemClass>
    </div>
  );
}

export default App;
