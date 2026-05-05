import { Outlet } from "react-router-dom";
import { MainNav } from "./MainNav";
import classes from "./Root.module.scss";
import { ThemeProvider } from "./ThemeContext";

export const Root = () => {
  return (
    <ThemeProvider>
      <MainNav />
      <main className={classes.content}>
        <Outlet />
      </main>
    </ThemeProvider>
  );
};
