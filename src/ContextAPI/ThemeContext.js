import { createContext, useState } from "react";

export const themeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [color, setColor] = useState("#4169e1");
  const [boxShadow, setBoxShadow] = useState("0 12px 15px 1px #6957af");

  const value = {
    color,
    setColor,
    boxShadow,
    setBoxShadow,
  };

  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
}
