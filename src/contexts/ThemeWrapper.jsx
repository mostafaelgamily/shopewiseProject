import { useEffect, useState } from "react";
import themeContext from "./themeContext";
import PropTypes from "prop-types";

import logoBlack from "../assets/logoBlack.png"; // Default light theme logo
import logoWhite from "../assets/logoWhite.png"; // Default dark theme logo

/**
 * ThemeWrapper component provides the theme context for children components.
 * It handles theme toggling and persisting the theme in a configurable storage mechanism (e.g., localStorage).
 *
 * @param {object} props - Props for ThemeWrapper
 * @param {React.ReactNode} props.children - The child components wrapped by ThemeWrapper
 * @param {string} [props.defaultTheme="dark"] - The default theme to be applied if no theme is stored
 * @param {Storage} [props.storage=localStorage] - Storage mechanism for persisting theme (e.g., localStorage)
 *
 * Usage Example:
 * ```jsx
 * <ThemeWrapper defaultTheme="dark" storage={sessionStorage}>
 *   <App />
 * </ThemeWrapper>
 * ```
 */
const ThemeWrapper = ({
  children,
  defaultTheme = "dark",
  storage = localStorage,
}) => {
  // Internal state variable is named 'theme', but it's persisted with key 'shopewiseThemeTheme'
  const [theme, setTheme] = useState(() => {
    return storage.getItem("shopewiseThemeTheme") || defaultTheme;
  });

  const toggleTheme = () => {
    setTheme((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // Apply the theme to the document root element
    document.documentElement.setAttribute("data-theme", theme);

    // Persist the theme in the provided storage with the key 'shopewiseThemeTheme'
    storage.setItem("shopewiseThemeTheme", theme);
  }, [theme, storage]);

  return (
    <themeContext.Provider
      value={{ toggleTheme, theme, setTheme, logoBlack, logoWhite }}
    >
      {children}
    </themeContext.Provider>
  );
};

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  defaultTheme: PropTypes.string, // Optional, defaults to 'light'
  storage: PropTypes.shape({
    getItem: PropTypes.func.isRequired,
    setItem: PropTypes.func.isRequired,
  }), // Optional, defaults to localStorage
};

export default ThemeWrapper;
