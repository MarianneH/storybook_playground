import ServiceElement from "./ServiceElement";

export default {
  title: "Components/ServiceElement", // should be unique in the whole project
  component: ServiceElement,
  args: {
    name: "Waschen, Schneiden, Stylen",
    price: "59,00 €",
    duration: "45 mins",
  },
};

const Template = (args) => <ServiceElement {...args} />;
export const Service = Template.bind({});
// Service.args = {
//   name: "Waschen, Schneiden, Stylen",
//   price: "59,00€",
//   duration: "45 mins",
// };
