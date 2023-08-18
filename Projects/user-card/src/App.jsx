/*
import "./user.css";
import user from "./user.json";
import { UserCard } from "./UserCard";
import { UserCardClass } from "./UserCardClass";
function App() {
  return (
    <>
      <h2>This is User Card Project</h2>
      <h2>Function Component</h2>
      // <UserCard
      //   name={user.name}
      //   phoneNumber={user.phoneNumber}
      //   age={user.age}
      //   address={user.address}
      // /> 
      <h2>Class Component</h2>
      <UserCardClass>{JSON.stringify(user)}</UserCardClass>
      <UserCardClass />
    </>
  );
}

export default App;
*/

import "./user.css";
import user from "./user.json";
import { UserCard } from "./UserCard";
import { UserCardClass } from "./UserCardClass";

export default function App() {
  return (
    <div>
      <UserCard
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address}
      />
      <br />
      <UserCardClass
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address}
      />
    </div>
  );
}
