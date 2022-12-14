import React from "react";
import { Primary } from "../Button/Button.stories";
import { StandardInput } from "../Input/Input.stories";
import * as PropTypes from "prop-types";

export default {
  title: "Components/Forms",
  args: {
    children: "+ add element",
    sizeInput: "small_input",
    sizeButton: "small_button",
  },
};

function handleClick(e) {
  e.preventDefault();
  console.log("hello");
}

export const addElementsForm = ({ children, sizeInput, sizeButton }) => (
  <form>
    <StandardInput size={sizeInput} />
    <Primary size={sizeButton} onClick={handleClick}>
      {children}
    </Primary>
  </form>
);
