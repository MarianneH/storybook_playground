import React from "react";
import Input from "./Input";

export default {
  title: "Elements/Input", // should be unique in the whole project
  component: Input,
  args: {
    size: "medium_input",
  },
};

const Template = (args) => <Input {...args} />;

export const SmallInput = Template.bind({});
SmallInput.args = {
  size: "small_input",
};

export const StandardInput = Template.bind({});
StandardInput.args = {
  size: "medium_input",
};

export const LargeInput = Template.bind({});
LargeInput.args = {
  size: "large_input",
};
