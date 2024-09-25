import React from "react";
import styles from "./top_button.module.css";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const TopButton = () => {
  return (
    <div
      className={styles.top_button_container}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <FaRegArrowAltCircleUp />
    </div>
  );
};

export default TopButton;
