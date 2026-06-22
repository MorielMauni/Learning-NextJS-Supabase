'use client'

import useDarkMode from "@/hooks/use-dark-mode";

// Represent the next mode that will be toggled.
const nextModeIcons = {
  light: "🌚",
  dark: "🌞",
};

export default function DarkMode() {
  
  const {theme, toggleTheme} = useDarkMode()  

  return (
    <>
      <button onClick={toggleTheme}>{nextModeIcons[theme]}</button>
    </>
  );
}
