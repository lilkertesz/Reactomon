import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ToggleContext = React.createContext();
const ThemeNameContext = React.createContext();

export const useBlackTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeToggle = () => {
  return useContext(ToggleContext);
};

export const useThemeName = () => {
  return useContext(ThemeNameContext);
};

export const ThemeProvider = ({ children }) => {
  const [blackTheme, setBlackTheme] = useState(false);
  const [themeName, setThemeName] = useState("Black");

  const toggleTheme = () => {
    setBlackTheme((blackTheme) => !blackTheme);
    if (themeName === "Black") {
      setThemeName("Colors");
    } else {
      setThemeName("Black");
    }
  };

  return (
    <ThemeContext.Provider value={blackTheme}>
      <ToggleContext.Provider value={toggleTheme}>
        <ThemeNameContext.Provider value={themeName}>
          {children}
        </ThemeNameContext.Provider>
      </ToggleContext.Provider>
    </ThemeContext.Provider>
  );
};
