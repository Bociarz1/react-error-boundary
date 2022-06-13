import { useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Machine from "./components/Machine";
function App() {

  const [sparkError, setSparkError] = useState(3)

const makeError = () => {
 if (sparkError === 3) {setSparkError("three")}
}

  return (
    <div className="App">
      <button onClick={makeError}>sparkError</button> <br/>
      <ErrorBoundary>
        <Machine number={0}/><br/>
        <Machine number={1}/><br/>
        <Machine number={sparkError}/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
