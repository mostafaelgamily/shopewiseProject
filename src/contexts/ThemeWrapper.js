import React, { useEffect, useState } from "react";
import themeContext from "./themeContext";

const ThemeWrapper = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div>
      <themeContext.Provider value={{ toggleTheme, theme, setTheme }}>
        {children}
      </themeContext.Provider>
    </div>
  );
};

export default ThemeWrapper;
