import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cosmos from "../videos/cosmos.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
            animate={{ y: 0 }}
          >
            {title}
          </motion.h1>
          <motion.a
            href="mailto:adanielli@hotmail.com"
            initial={{ scale: 2.5 }}
            animate={{ scale: [1, 1.5, 1, 1.5, 1] }}
          >
            <FontAwesomeIcon icon={faEnvelope} className="mail-icon" />
          </motion.a>
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
          I believe in design being clear and consistent, but not too
          consistent. To steer away from being perfect, a bit of blemish can add
          a playful subtle human connection and evokes some warmth with the
          user, just like using specific colors. In what ways? A fun logo, a
          heading that sits a bit off or in other appropiate and subtle ways.
          Still, most important is a user-friendly ui/ux, to engage and maintain
          the user on the right path, navigating throughout articles,
          registration/login flows etc, with breeze and never getting lost.
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
