import { useEffect, useState } from "react";

function App() {
  //Setting users in useState
  const [users, setUsers] = useState("");
  //Defining Loading state when data is being fetched
  const [loading, setLoading] = useState(true);
  //Using useEffect so the fetch runs once instead of multiple fetch
  //without useEffet it fetches multiple times.
  useEffect(() => {
    setLoading(true);
    {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setUsers(json))
        .finally(() => {
          setLoading(false);
        });
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
