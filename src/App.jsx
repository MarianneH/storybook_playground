import React from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  function handleClick() {
    console.log("Hi");
  }
  return (
    <p>
      Cleanedup React App
      <Button variant="danger" onClick={handleClick}>
        delete
      </Button>
    </p>
  );
}

export default App;
