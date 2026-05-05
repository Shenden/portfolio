import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  handleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  function handleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    console.log(theme);
  }
  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
