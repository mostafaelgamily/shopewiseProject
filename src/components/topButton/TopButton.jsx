import styles from "./top_button.module.css";
import { FaCircleArrowUp } from "react-icons/fa6";

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
      <FaCircleArrowUp />
    </div>
  );
};

export default TopButton;
