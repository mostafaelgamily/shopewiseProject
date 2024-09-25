import styles from "./toggleButton.module.css";

const ToggleButton = ({ navToggle, setNavToggle }) => {
  return (
    <div
      className={`
    ${styles.nav_toggle_icon_container} ${navToggle && styles.nav_open}`}
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

export default ToggleButton;

// Placed Inside the Parent:-
// const [navToggle, setNavToggle] = useState(false);
// <ToggleButton navToggle={navToggle} setNavToggle={setNavToggle} />
// Wrap the toggle button with a div parent having a classname dependant on the navToggle to do an action when being pressed
