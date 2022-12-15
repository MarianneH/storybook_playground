import AppointmentCard from "./AppointmentCard.js";

export default {
  title: "Components/AppointmentCard",
  component: AppointmentCard,
  args: {
    date: "01.12.22",
    time: "12:00",
  },
};

const Template = (args) => <AppointmentCard {...args} />;
export const Card = Template.bind({});
