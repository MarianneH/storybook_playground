import React from "react";
import "./Button.css";
import "../../App.css";
import * as PropTypes from "prop-types";

function Button(props) {
  const {
    variant = "primary",
    size = "medium_button",
    children,
    ...rest
  } = props;

  return (
    <button className={`button ${variant} ${size}`} {...rest}>
      {children}
    </button>
  );
}
Button.propTypes = {
  size: PropTypes.oneOf(["small_button", "medium_button", "large_button"]),
};

export default Button;
