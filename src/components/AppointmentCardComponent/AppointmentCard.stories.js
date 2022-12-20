import AppointmentCard from "./AppointmentCard.js";

export default {
  title: "Components/AppointmentCard",
  component: AppointmentCard,
  args: {
    date: "01.12.22",
    starttime: "12:00",
    endtime: "12:30",
    name: "richi",
    service: "short hair cut + wash + color",
    buttonContent: "book again",
    buttonStyle: "primary",
    buttonSize: "small_button",
  },
};

const Template = (args) => <AppointmentCard {...args} />;
export const Card = Template.bind({});

export const hairdresser = Template.bind({});
hairdresser.args = {
  buttonContent: "cancel",
  buttonStyle: "danger",
};
