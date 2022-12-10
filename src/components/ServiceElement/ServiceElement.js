import React from "react";
import plus from "../../assets/plus.svg";
import "./ServiceElement.css";
import "../../App.css";

function ServiceElement(props) {
  const {
    name = "Waschen, Schneiden, Stylen",
    price = "59,00 €",
    duration = "45 mins",
    ...rest
  } = props;
  return (
    <div className="service_container">
      <div className="serviceName">{name}</div>
      <div className="serviceRight">
        <div className="serviceDetails">
          <div className="servicePrice">{price}</div>
          <div className="serviceDuration">{duration}</div>
        </div>
        <div className="addImage">
          <img src={plus} alt="add" />
        </div>
      </div>
    </div>
  );
}

export default ServiceElement;
