import { ClassComponent } from "./ClassComponent";
import { FunctionComponent } from "./FunctionCompnent";

function App() {
  return (
    <div>
      <ClassComponent />
      <br />
      <br />
      {/* L34:Conditional Rendering
      Added {favoriteNumber} */}
      <FunctionComponent favoriteNumber={10} />
      {/* If favoriteNumber is not defined as a prop */}
      {/* <FunctionComponent /> */}
    </div>
  );
}

export default App;
