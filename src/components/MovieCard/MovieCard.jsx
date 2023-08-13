import "./MovieCard.css";

export default function MovieCard({ movie }) {
  const { id, title, summary, imageURL } = movie;
  return (
    <article className="movie-card">
      <img src={imageURL} alt="movie" />
      <div className="info">
        <h1>{title}</h1>
        <p>{summary}</p>
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
      </div>
    </article>
  );
}
