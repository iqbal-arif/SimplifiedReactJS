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
    setError(undefined);
    //Setting signal, a part of controller to stop double fetching
    const controller = new AbortController();
    {
      fetch("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
        .then((res) => {
          res.status === 200 ? res.json() : Promise.reject(res);
        })
        .then((json) => setUsers(json))
        .catch((e) => {
          if (e?.name === "AbortError") return;
          setError(e);
        })
        .finally(() => {
          setLoading(false);
        });
      //Cleanup
      return () => {
        controller.abort();
      };
    }
  }, []);
  // console.log(users);
  // Displaying Loading whiling fetching Data from API
  let dataFetch;
  loading
    ? (dataFetch = <h3>Fetching Data.....</h3>)
    : error != null
    ? (dataFetch = <h3>Error!!!</h3>)
    : (dataFetch = JSON.stringify(users));
  return (
    <>
      <h2>User API Fetching</h2>
      {dataFetch}
    </>
  );
}

export default App;
