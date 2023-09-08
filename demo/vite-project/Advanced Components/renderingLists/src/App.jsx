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
    </>
  );
}

export default App;
