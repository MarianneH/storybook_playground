import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import ServiceElement from "./components/ServiceElement/ServiceElement";
import InfoElement from "./components/InfoElement/InfoElement";
import internet from "./assets/internet.svg";

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
      <ServiceElement
        duration="60 mins"
        name="Tanzen, Schneiden, Stylen"
        price="59,00 €"
      />
      <InfoElement icon={internet} infoDetail="Hello.com" infoHl="Website" />
    </p>
  );
}

export default App;
