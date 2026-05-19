import { createContext, useState } from "react";

export const ThemeContext = createContext({
  //just placeholders
  theme: "light", //the state
  handleTheme: () => {}, //the function
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  function handleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    console.log(theme);
  }
  return (
    //return the state and function that we can use across components
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
