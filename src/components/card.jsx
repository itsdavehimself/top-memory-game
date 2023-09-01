import React from "react";
import "./card.css";

export default function Card({ image, artist, albumTitle, year, onClick }) {
  return (
    <section className="card" onClick={onClick}>
      <div className="card-picture">
        <img src={image} className="card-image" alt="Album cover" />
      </div>
      <div className="album-description">
        {artist} - {albumTitle}
      </div>
      <div className="album-year">{year}</div>
    </section>
  );
}
