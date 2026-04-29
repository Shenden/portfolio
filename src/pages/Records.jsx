import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FilteringRecords } from "./FilteringRecords";
import { NoRecords } from "./NoRecords";
import { membersData } from "../Data";

const container = {
  backgroundColor: "red",
};

export const Records = () => {
  const [album, setAlbum] = useState(membersData);

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
  function handleFilterGenre(genre) {
    setAlbum(membersData);
    if (genre) {
      setAlbum((prev) => prev.filter((item) => item.genre === genre));
    }

    if (genre === "") {
      return <h1>hello</h1>;
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
      //style={{ ...container }}
    >
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
                  {artist.album.map((album) => (
                    <span
                      key={album.albumID}
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
