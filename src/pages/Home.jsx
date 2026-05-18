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
            //transition={{ repeat: Infinity }}
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
          CSS/SCSS/Styled Components, Figma and beginner/intermediate level of
          using React/Hooks/State Management/Building custom components,
          understanding of CI/CD flows (GitLab, GitHub, Jenkins), Jira etc. I
          would say that I know little about a lot of stuff.
        </p>
        <h3> My design philosophy?</h3>
        <p>
          I believe in design being clear and consistent, but not too
          consistent. Steering away from being perfect and adding a bit of
          blemish can add a playful subtle human connection and evoke some
          warmth with the user, just like colors. A fun logo, a heading that
          sits a bit off or in other appropiate and subtle ways, as long as
          there's room and fits a company/brand profile. But, the most important
          end-goal is to have a user-friendly ui/ux, to engage and maintain the
          user on the right path, navigating throughout articles, registration
          and login flows with breeze and never getting lost.
        </p>
        <hr />
        <p>
          This site is still a wip. In the meantime, you can take a look at a
          interface concept I'm working on:
        </p>
        <h1>
          <a href="https://shenden.github.io/terminal/" target="_blank">
            Cosmos!
          </a>
        </h1>
        (opens up in external window)
        <video autoPlay muted loop playsInline>
          <source src={cosmos} type="video/mp4" />
        </video>
        <Link to="/records">
          <h1>Or checkout my vinyl collection!</h1>
        </Link>
        <p> a small one, but maybe we vibe with the same vibes!</p>
      </motion.div>
    </>
  );
};
