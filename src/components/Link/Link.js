import React from "react";
import "./Link.css";
import "../../App.css";
import * as PropTypes from "prop-types";

function Link(props) {
  const { size = "medium_link", children = "Click here", ...rest } = props;
  return (
    <a className={`link ${size}`} {...rest}>
      {children}
    </a>
  );
}
Link.propTypes = {
  size: PropTypes.oneOf(["small_link", "medium_link", "large_link"]),
};

export default Link;
