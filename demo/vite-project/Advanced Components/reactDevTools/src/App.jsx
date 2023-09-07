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
      <FunctionComponent favoriteNumber={3} />
    </div>
  );
}

export default App;
