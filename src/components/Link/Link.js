import React from "react";
import styles from "./Link.module.css";
import "../../App.css";
import * as PropTypes from "prop-types";

function Link(props) {
  const { size = "medium_link", children = "Click here", ...rest } = props;

  return (
    <a className={`${styles.link} ${styles[size]}`} {...rest}>
      {children}
    </a>
  );
}
Link.propTypes = {
  size: PropTypes.oneOf(["small_link", "medium_link", "large_link"]),
};

export default Link;
