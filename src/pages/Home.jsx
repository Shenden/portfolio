import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = ({ title }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="content-home"
      >
        <motion.h1
          className="not-perfect"
          initial={{ y: 40, rotate: 0 }}
          animate={{ y: 0, rotate: -3 }}
        >
          {title}
        </motion.h1>

        <p>
          Love all things design & tech. Years of experience working with
          CSS/SCSS/Styled Components, some Figma and on a somewhat intermediate
          level of React.
        </p>
        <p>
          My design philosophy - I believe in design being clean and clear, but
          not too clean. To steer away from being perfect adds a playful subtle
          human connection and evokes some warmth with the user, just like using
          correct colors. In what ways? A fun logo, a heading that sits a bit
          off, etc. In the end though, what matters most is a user-friendly
          ui/ux, to engage and maintain the user on the right path, navigating a
          site throughout articles, registration/login flows etc.
        </p>

        <p>
          This site is still a wip. In the meantime, you can take a look at a
          interface concept I'm working on called &nbsp;
          <a href="https://shenden.github.io/terminal/" target="_blank">
            Cosmos
          </a>
          (opens up in external window)
        </p>

        <p>
          Or &nbsp;
          <Link to="/records"> checkout my vinyl collection </Link>. A small
          one, but maybe we vibe with the same vibes!
        </p>

        <p>
          Ready to up my challenge in either a UI or React development position.
        </p>
      </motion.div>
    </>
  );
};
