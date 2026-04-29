import { Link } from "react-router-dom";
import classes from "./MainNav.module.scss";
import { useState } from "react";

export const MainNav = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prev) => !prev);
  }
  return (
    <header className={classes.header}>
      <div className="logo">Logo in here</div>
      <nav>
        <div className={classes.navContainer}>
          <button
            onClick={handleToggle}
            className={classes.hamburger}
            aria-label="toggle button"
          >
            burger icon
          </button>
          <div className={`${classes.navMenu} ${toggle ? classes.active : ""}`}>
            <ul className={classes.navList}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="records">Vinyl Collection</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
