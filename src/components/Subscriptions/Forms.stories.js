import React from "react";
import { Primary } from "../Button/Button.stories";
import { StandardInput } from "../Input/Input.stories";

export default {
  title: "Components/Forms",
};

function handleClick(e) {
  e.preventDefault();
}
export const addElementsForm = (props) => (
  <form>
    <StandardInput size="small_input" />
    <Primary size="small_button" onClick={handleClick}>
      {(props.button_text = "+ add element")}
    </Primary>
  </form>
);
