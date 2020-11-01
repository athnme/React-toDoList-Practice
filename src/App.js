import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import List from "./components/List";
import Snowfall from "./components/Snowfall";

function App() {
  const [inputText, setInputText] = useState("");
  const [wishes, setWishes] = useState([]);

  return (
    <div className="App">
      <Form
        wishes={wishes}
        setWishes={setWishes}
        inputText={inputText}
        setInputText={setInputText}
      />
      <List />
      <Snowfall />
    </div>
  );
}

export default App;
