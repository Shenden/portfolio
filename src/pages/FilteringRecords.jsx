import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export const FilteringRecords = ({ handleSort, handleFilter }) => {
  //get select values through ref
  const selectRef = useRef();

  const [isOn, setIsOn] = useState(false);

  function handleMotion() {
    setIsOn((prev) => !prev);
  }
  return (
    <>
      <button className="filter-btn-placement" onClick={handleMotion}>
        Place filter buttons left or right(test)
      </button>
      <motion.section
        layout
        style={{
          justifyContent: isOn ? "flex-end" : "flex-start",
        }}
        //className="filter-records-menu"
      >
        <motion.div
          layout
          transition={{
            type: "spring",
            visualDuration: 0.3,
            bounce: 0.4,
          }}
        >
          <Link to="/portfolio" className="home-icon">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
          <button onClick={handleSort}>Sort alphabetically</button>
          <label htmlFor="filter-records"> </label>
          <select
            id="filter-records"
            ref={selectRef}
            onChange={() => handleFilter(selectRef.current.value)}
          >
            <option value="">Sort: all</option>
            <option value="hiphop">Hiphop</option>
            <option value="reggae">Reggae</option>
            <option value="electronic">Electronic</option>
            <option value="ska">Ska</option>
            <option value="rock">Rock</option>
            <option value="soundtrack">Soundtrack</option>
            <option></option>
          </select>
        </motion.div>
      </motion.section>
    </>
  );
};
