import "/user.css";
import user from "./user.json";
function App() {
  return (
    <>
      <p>This is User Card Project</p>
      <p>{JSON.stringify(user)}</p>
    </>
  );
}

export default App;
