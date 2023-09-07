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
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </>
  );
}

export default App;
