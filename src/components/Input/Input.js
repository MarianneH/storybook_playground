import React from "react";
import "./Input.css";
import "../../App.css";

function Input(props) {
  const { size = "medium_input", ...rest } = props;
  return (
    <input
      type="text"
      className={`input ${size}`}
      {...rest}
      placeholder={size}
    />
  );
}

export default Input;
