import React from "react";
import "./App.css";
import PersonCardComponent from "./components/PersonCardComponent";

function App() {
  return (
    <div className="App">
      <PersonCardComponent
        firstname={"Jane"}
        lastname={"Doe"}
        age={45}
        haircolor={"Black"}
      />
      <PersonCardComponent
        firstname={"John"}
        lastname={"Smith"}
        age={88}
        haircolor={"Brown"}
      />
    </div>
  );
}

export default App;
