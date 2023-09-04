import { useEffect, useState } from "react";

function App() {
  //Setting users in useState
  const [users, setUsers] = useState("");
  //Using useEffect so the fetch runs once instead of multiple fetch
  //without useEffet it fetches multiple times.
  useEffect(() => {
    {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setUsers(json));
    }
  }, []);
  console.log(users);
  return (
    <>
      <h2>User API Fetching</h2>
      {JSON.stringify(users)}
    </>
  );
}

export default App;
