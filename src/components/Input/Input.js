import React from "react";
import styles from "./Input.module.css";
import "../../App.css";

function Input(props) {
  const { size = "medium_input", ...rest } = props;
  return (
    <input
      type="text"
      className={`${styles.input} ${styles[size]}`}
      {...rest}
      placeholder={size}
    />
  );
}

export default Input;
