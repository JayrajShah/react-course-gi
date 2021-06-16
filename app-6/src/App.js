import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";

function App() {
  const [showPara, setShowPara] = useState(false);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showPara && <p>Show para</p>}
      <Button
        onClick={() => {
          setShowPara(!showPara);
        }}
      >
        Toggle para
      </Button>
    </div>
  );
}

export default App;
