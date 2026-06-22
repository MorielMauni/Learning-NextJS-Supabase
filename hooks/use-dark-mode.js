import { useState } from "react";

const useDarkMode = (defaultTheme = "dark") => {
  const [theme, setTheme] = useState(defaultTheme);

  const setAndSaveTheme = (theme) => {
    setTheme(theme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  };

  const toggleTheme = () => {
    setAndSaveTheme(theme === "dark" ? "light" : "dark"); // If currtent is dark, set to light, otherwise set as dark.
  };

  return { theme, toggleTheme };
};

export default useDarkMode