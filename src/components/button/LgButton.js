import React from "react";
import styles from "./lgButton.module.css";

const LgButton = ({ name }) => {
  return (
    <div>
      <button className={styles.lg_button}>{name}</button>
    </div>
  );
};

export default LgButton;
