import { Link } from "react-router-dom";
import classes from "./MainNav.module.scss";
import { useState } from "react";
import profile from "../images/profile.png";

export const MainNav = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prev) => !prev);
  }
  return (
    <header className={classes.header}>
      <div className="logo">
        <img src={profile} />
      </div>
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
                <Link to="portfolio">Home</Link>
              </li>
              <li>
                <Link to="records">Vinyls</Link>
              </li>
              <li>
                <a href="https://shenden.github.io/terminal/" target="_blank">
                  Cosmos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
