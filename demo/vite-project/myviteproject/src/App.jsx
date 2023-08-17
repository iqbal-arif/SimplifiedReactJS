function App() {
  return React.createElement("h1", { id: "5" }, "Hello World");
  // Both, above and below statment writes same output.
  // return <h1 id="5">Hello World</h1>;
  // div with the class large and the id largeDiv with the text Hi
  // Remove the text hi
  // Add a label with the for prop set to inpuId adn any text
  // Add an input with the id inputId, type number, and value of 3 as a number.
  // To be able to allow the default value 3 use defaultValue={3} instead of value={3}
  
  return (
    <div className="large" id="largeDiv">
      <label htmlFor="inputId">First label</label>
      {/* Does not change value 3 */}
      <input id="inputId" type="number" value={3} />
      {/* Allows to change value 3 to any number */}
        input id="inputId" type="number" defaultValue={3} />
    </div>
    </div>
  );
}

export default App;
