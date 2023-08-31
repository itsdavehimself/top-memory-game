import react, { useEffect, useState } from "react";
import recordDataAPI from "./record-data";
import Card from "./card";

export default function CardGrid() {
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

  useEffect(() => {
    recordDataAPI()
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
  }, []);

  return (
    <div>
      {albumArr.map((album, index) => (
        <Card
          key={index}
          image={album.imageURL}
          artist={album.artistName}
          albumTitle={album.albumName}
          year={album.albumYear}
        ></Card>
      ))}
    </div>
  );
}
