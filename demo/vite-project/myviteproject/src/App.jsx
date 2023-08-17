function App() {
  return React.createElement("h1", { id: "5" }, "Hello World");
  // Both, above and below statment writes same output.
  // return <h1 id="5">Hello World</h1>;
  // div with the class large and the id largeDiv with the text Hi
  // Remove the text hi
  // Add a label with the for prop set to inpuId adn any text
  // Add an input with the id inputId, type number, and value of 3 as a number.

  return (
    <div className="large" id="largeDiv">
      <label htmlFor="inputId">First label</label>
      <input id="inputId" type="number" value={3} />
    </div>
  );
}

export default App;
