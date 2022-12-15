import StylistCard from "./StylistCard";
import sampleImage from "./seth-doyle-vmBik4xv27s-unsplash.jpg";

export default {
  title: "Components/StylistCard",
  component: StylistCard,
  args: {
    name: "Sabine",
    description:
      "Lorem Ipsum, Lorem Ipsum, Ipsum, Ipsum, Lorem Ipsum, Lorem Ipsum",
    image: sampleImage,
  },
};

const Template = (args) => <StylistCard {...args} />;
export const Card = Template.bind({});
