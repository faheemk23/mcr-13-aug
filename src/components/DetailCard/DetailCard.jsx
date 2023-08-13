import "./DetailCard.css";

export default function DetailCard({ movie }) {
  const {
    title,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
    summary,
    imageURL,
  } = movie;
  return (
    <article className="detail-card">
      <img src={imageURL} alt="movie" />
      <section>
        <h1>{title}</h1>
        <p>{summary}</p>
        <p>Year : {year}</p>
        <p>Genre : {genre.join(", ")}</p>
        <p>Rating : {rating}</p>
        <p>Director : {director}</p>
        <p>Writer : {writer}</p>
        <p>Cast : {cast.join(", ")}</p>
        <div className="btn-container">
          {true ? (
            <button className="btn">Star</button>
          ) : (
            <button className="btn">{true ? "Starred" : "Unstar"}</button>
          )}
          {true ? (
            <button className="btn">Add to WatchList</button>
          ) : (
            <button className="btn">
              {true ? "Added to WatchList" : "Remove from watch list"}
            </button>
          )}
        </div>
      </section>
    </article>
  );
}
