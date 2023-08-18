import "./user.css";
import user from "./user.json";
import { UserCard } from "./UserCard";
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
      <h2>Function Component</h2>
      <UserCard />
      <h2>Class Component</h2>
      <UserCardClass>{JSON.stringify(user)}</UserCardClass>
    </>
  );
}

export default App;
