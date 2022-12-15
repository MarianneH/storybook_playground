import styles from "./StylistCard.module.css";
import "../../App.css";

function StylistCard(props) {
  const { name, description, image } = props;
  return (
    <div className={styles.stylistCard}>
      <img url={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default StylistCard;
