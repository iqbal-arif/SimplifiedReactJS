import { useState, useEffect } from "react";

function App() {
  //Setting users in useState
  const [users, setUsers] = useState("");
  //Defining Loading state when data is being fetched
  const [loading, setLoading] = useState(true);
  //Error useState
  const [error, setError] = useState();
  useEffect(() => {
    //Setting loading state
    setLoading(true);
    setError(undefined);
    //Setting signal, a part of controller to stop double fetching
    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((res) => {
        // res.status === 200 ? res.json() : Promise.reject(res);
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((json) => setUsers(json))
      .catch((e) => {
        if (e?.name === "AbortError") return setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
    //Cleanup
    return () => {
      controller.abort();
    };
  }, []);
  let usersList = JSON.stringify(users);
  // console.log(usersList);
  // let usersName = usersList.name;
  // usersList.map((user) => {
  //   return user;
  // });
  return (
    <>
      <h3>Rendering List through JSON API</h3>
      <pre>{usersList}</pre>
    </>
  );
}
export default App;
