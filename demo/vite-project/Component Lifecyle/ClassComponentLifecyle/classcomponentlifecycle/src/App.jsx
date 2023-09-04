import { useState } from "react";

import { Child } from "./Child";

function App() {
  const [show, setShow] = useState(true);

  const childComponent = show ? <Child /> : null;
  return (
    <>
      <p className="class component lifecycle">Class Component Lifecycle</p>
      <div>
        <button onClick={() => setShow((currentShow) => !currentShow)}>
          Show/Hide
        </button>
        {childComponent}
      </div>
    </>
  );
}

export default App;
