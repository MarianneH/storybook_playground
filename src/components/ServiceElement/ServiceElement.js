import React from "react";
import plus from "../../assets/plus.svg";
import styles from "./ServiceElement.module.css";
import "../../App.css";

function ServiceElement(props) {
  const {
    name = "Waschen, Schneiden, Stylen",
    price = "59,00 €",
    duration = "45 mins",
    ...rest
  } = props;
  return (
    <div className={styles.service_container}>
      <div className={styles.serviceName}>{name}</div>
      <div className={styles.serviceRight}>
        <div className={styles.serviceDetails}>
          <div className={styles.servicePrice}>{price}</div>
          <div className={styles.serviceDuration}>{duration}</div>
        </div>
        <div className={styles.addImage}>
          <img src={plus} alt="add" />
        </div>
      </div>
    </div>
  );
}

export default ServiceElement;
