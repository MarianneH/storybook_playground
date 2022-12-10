import InfoElement from "./InfoElement";
import email from "../../assets/email.svg";
import phone from "../../assets/phone.svg";
import internet from "../../assets/internet.svg";

export default {
  title: "Components/InfoElement", // should be unique in the whole project
  component: InfoElement,
  args: {
    icon: email,
  },
};

const Template = (args) => <InfoElement {...args} />;
export const EmailContact = Template.bind({});
EmailContact.args = {
  icon: email,
  infoHl: "Email",
  infoDetail: "naturfriseur@gmail.com",
};

export const WebsiteContact = Template.bind({});
WebsiteContact.args = {
  icon: internet,
  infoHl: "Website",
  infoDetail: "www.naturfriseur-aachen.de",
};
export const PhoneContact = Template.bind({});
PhoneContact.args = {
  icon: phone,
};
