import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import ServiceElement from "./components/ServiceElement/ServiceElement";
import InfoElement from "./components/InfoElement/InfoElement";
import internet from "./assets/internet.svg";
import calendar from "./assets/calendar.svg";

function App() {
  function handleClick() {
    console.log("Hi");
  }
  return (
    <p>
      Cleanedup React App
      <div>
        Primary Button{" "}
        <Button variant="primary" onClick={handleClick} icon={calendar}>
          Book Appointment
        </Button>
      </div>
      <div>
        Secondary Button small{" "}
        <Button variant="secondary" size="small" onClick={handleClick}>
          Sign In
        </Button>
      </div>
      <div>
        Danger Button xsmall{" "}
        <Button variant="danger" size="xsmall" onClick={handleClick}>
          Delete
        </Button>
      </div>
      <div>
        Invisible Button{" "}
        <Button variant="invisible" size="small" onClick={handleClick}>
          Log In
        </Button>
      </div>
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
