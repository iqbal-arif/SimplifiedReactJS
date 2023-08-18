import "./user.css";
// import { UserCard } from "./UserCard";
import { UserCardClass } from "./UserCardClass";
function App() {
  return (
    <>
      <h2>This is User Card Project</h2>
      {/* <p>{JSON.stringify(user)}</p>
      <p>{JSON.stringify(user.name, user.age)}</p>
      <p>{JSON.stringify(user.age)}</p>
      <p>{JSON.stringify(user.phoneNumber)}</p>
      <p>{JSON.stringify(user.address)}</p> */}
      <UserCard />
      {/* {JSON.stringify(user.name)}</UserCard> */}
    </>
  );
}

export default App;
