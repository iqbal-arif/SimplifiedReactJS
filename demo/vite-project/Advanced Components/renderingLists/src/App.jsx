import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: "item 1" },
    { id: crypto.randomUUID(), name: "item 2" },
  ]);

  function addItem() {
    setItems((currentItems) => {
      return [...currentItems, { id: crypto.randomUUID(), name: "New Item" }];
    });
  }
  return (
    <>
      <h2>Rendering Lists</h2>
      <button onClick={addItem}>Add Item</button>
      {/* Displays the pre-formatted Object in the browser */}
      {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}
      {/* {items} variable does not display the preformatted object but instead gives error; check console*/}
      {/* Displays item listed in array */}
      <pre>{[1, 2, 3, 4]}</pre>
      {/* Displays divs of array */}
      <pre>{[<div>1</div>, <div>2</div>, <div>3</div>]}</pre>
      {/* To Display Array of objects need to convert them to valid JSX items. For that use map */}
      <pre>
        {items.map((item) => {
          return (
            <>
              <div key={item.id}>
                {item.name}
                {/* With input tag, any new item with text entered will take index0 POSITION in array object. Thus console has error. See Warning in console */}
                {/* This is resolved by adding key.id with each loop */}
                {/*The key.id should not be used in Child Components  */}
                <input type="text"></input>
              </div>
            </>
          );
        })}
      </pre>
    </>
  );
}

export default App;
