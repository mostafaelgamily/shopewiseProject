import styles from "./lgButton.module.css";
import PropTypes from "prop-types";

const LgButton = ({ name }) => {
  return (
    <div>
      <button className={styles.lg_button}>{name}</button>
    </div>
  );
};

LgButton.propTypes = {
  name: PropTypes.node.isRequired,
};

export default LgButton;
