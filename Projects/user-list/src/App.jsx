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
  let usersList = JSON.stringify(users, null, 2);

  // let jsData=
  //   [{"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","address":{"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}},"phone":"1-770-736-8031 x56442","website":"hildegard.org","company":{"name":"Romaguera-Crona","catchPhrase":"Multi-layered client-server neural-net","bs":"harness real-time e-markets"}},{"id":2,"name":"Ervin Howell","username":"Antonette","email":"Shanna@melissa.tv","address":{"street":"Victor Plains","suite":"Suite 879","city":"Wisokyburgh","zipcode":"90566-7771","geo":{"lat":"-43.9509","lng":"-34.4618"}},"phone":"010-692-6593 x09125","website":"anastasia.net","company":{"name":"Deckow-Crist","catchPhrase":"Proactive didactic contingency","bs":"synergize scalable supply-chains"}},{"id":3,"name":"Clementine Bauch","username":"Samantha","email":"Nathan@yesenia.net","address":{"street":"Douglas Extension","suite":"Suite 847","city":"McKenziehaven","zipcode":"59590-4157","geo":{"lat":"-68.6102","lng":"-47.0653"}},"phone":"1-463-123-4447","website":"ramiro.info","company":{"name":"Romaguera-Jacobson","catchPhrase":"Face to face bifurcated interface","bs":"e-enable strategic applications"}}
  // ]
  
  // console.log(jsData.map(user=>{
  //   console.log(user.name)
  // }))
  // console.log(usersList.map(user=>{
  //   console.log(user.name)
  // }))
  
  // console.log(usersList);
  // let usersName = usersList.name;
  // {
  //   usersList.map((list) => {
  //     return list;
  //   });
  // }
  return (
    <div>
      <h3>Rendering List through JSON API</h3>
      <>
      <div>
        <ul>
          {usersList.map((record, i) => (
            <li key={i}>
              {record.id} - {record.name}
            </li>
          ))}
        </ul>
      </div>

      {/* <pre>{}</pre> */}
    </>

    </div>
  );
}
export default App;

// https://www.cloudhadoop.com/reactjs-display-json-data