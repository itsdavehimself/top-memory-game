export default function Card({ image, artist, albumTitle, year }) {
  return (
    <section className="card">
      <div className="card-picture">
        <img src={image}></img>
      </div>
      <div className="album-description">
        {artist} - {albumTitle}
      </div>
      <div className="album-year">{year}</div>
    </section>
  );
}
