import React from "react";
import "./InfoElement.css";
import "../../App.css";
import right from "../../assets/right-arrow.svg";
import email from "../../assets/email.svg";

function InfoElement(props) {
  const {
    infoHl = "Telefon",
    icon = email,
    infoDetail = "+49177 36223782",
    ...rest
  } = props;
  return (
    <div className={`info `} {...rest}>
      <div className="contact">
        <img src={icon} alt={infoHl} />
        <div>
          <div className="info_hl">{infoHl}</div>{" "}
          <div className="info_detail">{infoDetail}</div>
        </div>
      </div>
      <img src={right} alt="arrow" />
    </div>
  );
}

export default InfoElement;
