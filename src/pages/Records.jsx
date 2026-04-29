import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FilteringRecords } from "./FilteringRecords";
import { NoRecords } from "./NoRecords";

// TO DO - ADD RECORDS & MOVE DATA TO SEPARATE FILE...

const membersData = [
  {
    name: "Wu Tang Clan",
    album: [
      {
        cover: "",
        title: "36th Chambers",
        albumID: 1,
      },
    ],
    url: "https://media2.ntslive.co.uk/resize/1600x1600/ec8e4ffa-dd79-4f91-8051-dae184a30d35_1757548800.png",
    genre: "hiphop",
    id: 1,
  },
  {
    name: "GhostFace Killah",
    album: [
      {
        cover: "album cover",
        title: "Supreme Clientel",
      },
      {
        cover: "album cover",
        title: "Daytona 2000",
        albumID: 2,
      },
    ],
    url: "https://brightonsource.co.uk/wp-content/uploads/2016/04/Ghostface-Killah-702X468.jpg",
    genre: "hiphop",
    id: 2,
  },
  {
    name: "The Specials",
    album: [
      {
        cover: "album cover",
        title: "Special album one",
      },
      {
        cover: "album cover",
        title: "Special album two",
        albumID: 3,
      },
    ],
    url: "https://www.thespecials.com/uploads/2016-02/the-band-intro-3.jpeg",
    genre: "ska",
    id: 3,
  },
  {
    name: "Jimmy Cliff",
    album: [
      {
        cover: "album cover",
        title: "The Harder They Come",
        albumID: 4,
      },
    ],
    url: "https://www.vibe.com/wp-content/uploads/2025/11/GettyImages-905911220-e1764248141415.jpg?w=910&h=511&crop=1",
    genre: "reggae",
    id: 4,
  },
  {
    name: "FunkDoobiest",
    album: [
      {
        cover: "album cover",
        title: "Which Doobie U B?",
        albumID: 5,
      },
    ],
    url: "https://prysmtalentagency.com/wp-content/uploads/2025/04/Funkdoobiest-1080x630.webp",
    genre: "hiphop",
    id: 5,
  },
  {
    name: "Bob M & The Wailers",
    album: [
      {
        cover: "album cover",
        title: "No Money!",
        albumID: 6,
      },
    ],
    url: "https://cdn.prod.website-files.com/66428b017813ba35b9c025ad/6659fc643e478970aee18a12_Bob-Marley-and-the-wailers1.png",
    genre: "reggae",
    id: 6,
  },
  {
    name: "Daft Punk",
    album: [
      {
        cover: "album cover",
        title: "Tron Legacy",
        albumID: 7,
      },
    ],
    url: "https://highxtar.com/wp-content/uploads/2026/02/thumb-daft-punk-human-after-all-1440x1080.jpg",
    genre: "electronic",
    id: 7,
  },

  {
    name: "LL Cool J",
    album: [
      {
        cover: "album cover",
        title: "Bigger and Deffer",
      },
      {
        cover: "album cover",
        title: "The FORCE",
      },
      {
        cover: "album cover",
        title: "Mr.Smith",
        albumID: 8,
      },
    ],
    url: "https://variety.com/wp-content/uploads/2016/01/ll-cool-j-walk-of-fame.jpg",
    genre: "hiphop",
    id: 8,
  },
  {
    name: "Dillinger",
    album: [
      {
        cover: "dillinger cover",
        title: "Bionic Dread",
        albumID: 9,
      },
    ],
    url: "https://i.ytimg.com/vi/EcGJLGEywd4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCGcwfMwF4usokWMSwaQ5730zI-dA",
    genre: "reggae",
    id: 9,
  },
];

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
