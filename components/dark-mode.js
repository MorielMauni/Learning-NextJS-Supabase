"use client";

import { useState } from "react";

// Represent the next mode that will be toggled.
const nextModeIcons = {
  light: "🌚",
  dark: "🌞",
};

export default function DarkMode() {
  const [theme, setTheme] = useState('dark');
  // const [icon, setIcon] = useState()

  const toggleNextMode = () => {
    setTheme(theme == "dark" ? "light" : "dark"); // If currtent is dark, set to light, otherwise set as dark.
  };

  return (
    <>
      <button onClick={toggleNextMode}>{nextModeIcons[theme]}</button>
    </>
  );
}
