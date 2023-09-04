import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  //Using useEffect so the fetch runs once instead of multiple fetch
  //without useEffet it fetches multiple times.
  useEffect(() => {
    {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
  }, []);
  return (
    <>
      <h2>User API Fetching</h2>
    </>
  );
}

export default App;
