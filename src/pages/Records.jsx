import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
//import { Link } from "react-router-dom";
import { FilteringRecords } from "./FilteringRecords";
import { NoRecords } from "./NoRecords";
import { vinylData } from "../Data";

const VinylContainer = {
  padding: "0 12px",
};

export const Records = ({ title }) => {
  const [album, setAlbum] = useState(vinylData);

  /*  setAlbum((prev) =>
      [...prev].sort((a, b) => {
        return a.name.localeCompare(b.name);
      }),
    ); */

  /* sort alphabetical function */
  function handleSort() {
    setAlbum(
      [...album].sort((a, b) => {
        return a.name.localeCompare(b.name);
      }),
    );
  }

  //Select filtering function.
  function handleFilterGenre(selectedGenre) {
    setAlbum(vinylData);
    if (selectedGenre) {
      setAlbum((prev) => prev.filter((item) => item.genre === selectedGenre));
    }
  }

  function handleTest(albumTitle) {
    console.log(albumTitle);
  }

  /*   function handleAlbumCover(cover) {
    //console.log(cover);
  } */
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ ...VinylContainer }}
    >
      <motion.h1
        className="not-perfect"
        initial={{ y: 40, rotate: 0 }}
        animate={{ y: 20, rotate: 0 }}
      >
        {title}
      </motion.h1>
      <FilteringRecords
        handleSort={handleSort}
        handleFilter={handleFilterGenre}
      />
      {album.length === 0 && <NoRecords />}
      <ul>
        <AnimatePresence>
          {album.map((artist) => (
            <motion.li
              key={artist.id}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              // exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <div className="album-wrapper">
                <div className="artist-box">
                  <span className="title-image">
                    <img src={artist.url} alt="" />
                    <span className="title-name">{artist.name}</span>
                  </span>
                </div>

                <div className="albums">
                  <span>Albums</span>
                  {/* //mapping out album array from data we already mappoing(artist). */}
                  {artist.album.map((album) => (
                    <span
                      key={album.title}
                      //onMouseEnter={() => handleAlbumCover(album.cover)}
                      onClick={() => handleTest(album.title)}
                      className="album-title"
                    >
                      {album.title}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </motion.div>
  );
};
