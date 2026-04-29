import { Outlet } from "react-router-dom";
import { MainNav } from "./MainNav";
import classes from "./Root.module.scss";

export const Root = () => {
  return (
    <>
      <MainNav />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};
