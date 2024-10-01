import { useEffect, useState } from "react";
import themeContext from "./themeContext";
import PropTypes from "prop-types";

/**
 * ThemeWrapper component provides the theme context for children components.
 * It handles theme toggling and persisting the theme in a configurable storage mechanism (e.g., localStorage).
 *
 * @param {object} props - Props for ThemeWrapper
 * @param {React.ReactNode} props.children - The child components wrapped by ThemeWrapper
 * @param {string} [props.defaultTheme="light"] - The default theme to be applied if no theme is stored
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
  const [shopWiseTheme, setTheme] = useState(() => {
    return storage.getItem("shopWiseTheme") || defaultTheme;
  });

  const toggleTheme = () => {
    setTheme((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // Apply the theme to the document root element
    document.documentElement.setAttribute("data-theme", shopWiseTheme);

    // Persist the theme in the provided storage
    storage.setItem("shopWiseTheme", shopWiseTheme);
  }, [shopWiseTheme, storage]);

  return (
    <themeContext.Provider value={{ toggleTheme, shopWiseTheme, setTheme }}>
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
