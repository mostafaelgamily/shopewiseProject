import React, { useEffect, useState } from "react";
import themeContext from "./themeContext";

const ThemeWrapper = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    setTheme((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <themeContext.Provider value={{ toggleTheme, theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeWrapper;
