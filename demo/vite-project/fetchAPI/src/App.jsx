import { useEffect, useState } from "react";

function App() {
  //Setting users in useState
  const [users, setUsers] = useState("");
  //Defining Loading state when data is being fetched
  const [loading, setLoading] = useState(true);
  //Error useState
  const [error, setError] = useState();
  //Using useEffect so the fetch runs once instead of multiple fetch
  //without useEffet it fetches multiple times.
  useEffect(() => {
    //Setting loading state
    setLoading(true);

    {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          res.status === 200 ? res.json() : Promise.reject(res);
        })
        .then((json) => setUsers(json))
        .catch((e) => setError(e))
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);
  // console.log(users);
  // Displaying Loading whiling fetching Data from API
  let dataFetch;
  loading
    ? (dataFetch = <h3>Fetching Data.....</h3>)
    : (dataFetch = JSON.stringify(users));
  return (
    <>
      <h2>User API Fetching</h2>
      {dataFetch}
    </>
  );
}

export default App;
