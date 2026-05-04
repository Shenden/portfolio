import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cosmos from "../videos/cosmos.mp4";
export const Home = ({ title }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0, rotate: 0.5 }}
        className="content-home"
      >
        <section>
          <motion.h1
            className="not-perfect"
            initial={{ y: 40 }}
            animate={{ y: 20 }}
          >
            {title}
          </motion.h1>
        </section>

        <p>
          Ready to up my challenge in either a UI or React development position.
        </p>
        <h3> So who am I?</h3>
        <p>
          Love all things design & tech. Years of experience working with
          CSS/SCSS/Styled Components, some Figma and at a intermediate level of
          React.
        </p>
        <h3> My design philosophy?</h3>
        <p>
          I believe in design being clean and clear, but not too clean. To steer
          away from being perfect adds a playful subtle human connection and
          evokes some warmth with the user, just like using correct colors. In
          what ways? A fun logo, a heading that sits a bit off, etc. But most
          important is a user-friendly ui/ux, to engage and maintain the user on
          the right path, navigating throughout articles, registration/login
          flows etc, with breeze.
        </p>
        <p>
          This site is still a wip. In the meantime, you can take a look at a
          interface concept I'm working on called &nbsp;
          <a href="https://shenden.github.io/terminal/" target="_blank">
            Cosmos
          </a>
          (opens up in external window)
          <video autoPlay muted loop playsInline>
            <source src={cosmos} type="video/mp4" />
          </video>
        </p>
        <p>
          Or &nbsp;
          <Link to="/records"> checkout my vinyl collection </Link>. A small
          one, but maybe we vibe with the same vibes!
        </p>
      </motion.div>
    </>
  );
};
