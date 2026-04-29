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
        <h1>{title}</h1>
        <p>
          Hey! My name is André, still some minor work to be done, will add some
          but you can in the meantime check out a side project, my vinyl
          collection. A small one, but maybe we vibe with the same vibes!
        </p>
        {/*         <Link to="records">Check my vinyls here! </Link> */}
      </motion.div>
    </>
  );
};
