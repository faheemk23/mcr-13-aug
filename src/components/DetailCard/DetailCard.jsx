import "./DetailCard.css";

const test = {
  id: 1,
  title: "Redemption",
  year: 1994,
  genre: ["Drama"],
  rating: 9,
  director: "Frank Darabont",
  writer: "Stephen King",
  cast: ["Tim Robbins", "Morgan Freeman"],
  summary:
    "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
  imageURL:
    "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
};

export default function DetailCard() {
  const {
    id,
    title,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
    summary,
    imageURL,
  } = test;
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
