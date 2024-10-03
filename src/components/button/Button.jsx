import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./button.module.css";

/**
 * Button component to handle navigation with dynamic styles and sizes.
 * @param {Object} props - Component properties.
 * @param {string} props.title - The text displayed on the button.
 * @param {string} props.bgcolor - Button background color.
 * @param {string} props.hoverbgcolor - Background color on hover.
 * @param {string} props.fontcolor - Button font color.
 * @param {string} props.hoverfontcolor - Font color on hover.
 * @param {string} props.link - The URL to navigate to when the button is clicked.
 * @param {string} props.size - Determines button size (sm, md, lg, xl).
 */
const Button = ({
  title = "Click me",
  bgcolor = "var(--primary-color)",
  hoverbgcolor = "transparent",
  fontcolor = "#ffffff",
  hoverfontcolor = "var(--primary-color)",
  link = "/",
  size = "md", // Default size is medium
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // Dynamically assign class based on size
  const sizeClass = styles[`button_${size}`] || styles.button_md;

  return (
    <div className={styles.button_container}>
      <button
        className={`${styles.button} ${sizeClass}`}
        style={{
          backgroundColor: isHovered ? hoverbgcolor : bgcolor,
          borderColor: bgcolor,
          color: isHovered ? hoverfontcolor : fontcolor,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate(link)}
      >
        {title}
      </button>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  bgcolor: PropTypes.string,
  hoverbgcolor: PropTypes.string,
  fontcolor: PropTypes.string,
  hoverfontcolor: PropTypes.string,
  link: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]), // Define the available sizes
};

export default Button;
