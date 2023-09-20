import { useState, useEffect } from "react";
// Teacher Method Step
import {User} from "./User";

function App() {
  //Setting users in useState
  // When useState() is set to Empty
  const [users, setUsers] = useState();
  // When useState() is set to Empty Array
  // const [users, setUsers] = useState([]);
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
  let usersJson = JSON.stringify(users, null, 2);
  const usersObject = JSON.parse(usersJson)
  // console.log(usersObject)
  let usersList = Object.values(usersObject)
  console.log(usersList)
 
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
      <h1>User List</h1>
      <>
      <div>
          <pre>
        <ul>
          {/* When useState() is set to Empty then use the following code */}
          {usersList != null & usersList.map(
                (list,i) => {
                  return (<li key={i}>{list.name}</li>)}
            )}
            {/* When useState([]) is set to Empty Array then use the following code */}
          {/* { usersList.map(
                (list,i) => {
                  return (<li key={i}>{list.name}</li>)}
            )
          }            */}
        </ul>
      </pre>
      </div>


    </>
    {/* Instructor Method */}
    <>
    <h1>User List</h1>
    <ul>
      {users.map(user =>{
        return <User name = {user.name} />
      })}
    </ul>
    </>

    </div>

    
  );
}
export default App;

// https://www.cloudhadoop.com/reactjs-display-json-data