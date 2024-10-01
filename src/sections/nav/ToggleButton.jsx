import PropTypes from "prop-types";
import styles from "./toggleButton.module.css";

/**
 * ToggleButton Component:
 *
 * This component renders a button that toggles the navigation menu open and closed.
 * It consists of three lines representing a typical "hamburger" icon.
 * The button's state (open or closed) is controlled via the `navToggle` prop,
 * and clicking the button toggles the state using the `setNavToggle` function.
 *
 * It expects 2 props:
 *
 * @prop {boolean} navToggle - A boolean that indicates whether the navigation is currently open (true) or closed (false).
 * @prop {function} setNavToggle - A function that toggles the state of the navigation.
 *
 * Example usage:
 * <ToggleButton navToggle={navToggle} setNavToggle={setNavToggle} />
 */

const ToggleButton = ({ navToggle, setNavToggle }) => {
  return (
    <div
      className={`${styles.nav_toggle_icon_container} ${
        navToggle && styles.nav_open
      }`}
      onClick={() => {
        setNavToggle(!navToggle);
      }}
    >
      <div className={styles.nav_toggle_icon_line}></div>
      <div className={styles.nav_toggle_icon_line}></div>
      <div className={styles.nav_toggle_icon_line}></div>
    </div>
  );
};

ToggleButton.propTypes = {
  navToggle: PropTypes.bool.isRequired, // Boolean to indicate the nav state
  setNavToggle: PropTypes.func.isRequired, // Function to toggle the nav state
};

export default ToggleButton;
