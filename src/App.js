import React from "react";
import "./App.css";

import Form from "./components/Form";
import List from "./components/List";
import Snowfall from "./components/Snowfall";

function App() {
  return (
    <div className="App">
      <Form />
      <List />
      <Snowfall />
    </div>
  );
}

export default App;
