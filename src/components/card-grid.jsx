import react, { useEffect, useState } from "react";
import recordDataAPI from "./record-data";
import Card from "./card";
import "./card-grid.css";

export default function CardGrid({ numOfCards }) {
  const [albumData, setAlbumData] = useState({
    imageURL: null,
    artistName: null,
    albumName: null,
    albumYear: null,
  });

  const [albumArr, setAlbumArr] = useState([]);

  const addAlbum = (album) => {
    setAlbumArr((prevAlbumArr) => [...prevAlbumArr, album]);
  };

  const shuffleAlbums = () => {
    const shuffledAlbums = [...albumArr];
    for (let i = shuffledAlbums.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledAlbums[i], shuffledAlbums[j]] = [
        shuffledAlbums[j],
        shuffledAlbums[i],
      ];
    }
    setAlbumArr(shuffledAlbums);
  };

  useEffect(() => {
    for (let i = 0; i < numOfCards; i += 1) {
      recordDataAPI(i)
        .then((albumData) => {
          setAlbumData({
            imageURL: albumData.imageURL,
            artistName: albumData.artistName,
            albumName: albumData.albumName,
            albumYear: albumData.albumYear,
          });
          addAlbum(albumData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [numOfCards]);

  return (
    <div className="card-grid">
      {albumArr.map((album, index) => (
        <Card
          key={index}
          image={album.imageURL}
          artist={album.artistName}
          albumTitle={album.albumName}
          year={album.albumYear}
          onClick={shuffleAlbums}
        ></Card>
      ))}
    </div>
  );
}
