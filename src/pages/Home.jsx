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
          Hey, my name is André! Site is still a wip. In the meantime, you can
          <Link to="/records"> checkout my vinyl collection </Link>. A small
          one, but maybe we vibe with the same vibes!
        </p>
      </motion.div>
    </>
  );
};
