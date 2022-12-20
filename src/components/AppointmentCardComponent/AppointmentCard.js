import styles from "./AppointmentCard.module.css";
import "../../App.css";
import Button from "./../Button/Button";
//import user from "../../assets/user.svg";
//import shears from "../../assets/shears.svg";

function AppointmentCard(props) {
  const {
    date,
    starttime,
    endtime,
    name,
    service,
    buttonContent,
    buttonStyle,
    buttonSize,
  } = props;
  return (
    <div className={styles.appointmentCard}>
      <div className={styles.appointmentCardHearder}>
        <h3>
          {date} / {starttime} - {endtime}
        </h3>
        <Button size={buttonSize} variant={buttonStyle}>
          {buttonContent}
        </Button>
      </div>
      <div>
        <p>{name}</p>
      </div>
      <p>{service}</p>
    </div>
  );
}

export default AppointmentCard;
