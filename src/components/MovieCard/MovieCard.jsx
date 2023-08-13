import { useContext } from "react";

import { DataContext } from "../../contexts/DataContext";
import "./MovieCard.css";

export default function MovieCard({ movie }) {
  const { id, title, summary, imageURL } = movie;

  const {
    dataState: { starred, watchlist },
    dataDispatch,
  } = useContext(DataContext);

  const inWatchList = (movieId, watchlist) =>
    watchlist.some(({ id }) => id === movieId);

  const inStarred = (movieId, starred) =>
    starred.some(({ id }) => id === movieId);

  const addToStarred = (dataDispatch, movie) => {
    dataDispatch({ type: "add-to-starred", payload: movie });
  };

  const removeFromStarred = (dataDispatch, movie) => {
    dataDispatch({ type: "remove-from-starred", payload: movie });
  };

  const addToWatchlist = (dataDispatch, movie) => {
    dataDispatch({ type: "add-to-watchlist", payload: movie });
  };

  const removeFromWatchlist = (dataDispatch, movie) => {
    dataDispatch({ type: "remove-from-watchlist", payload: movie });
  };
  return (
    <article className="movie-card">
      <img src={imageURL} alt="movie" />
      <div className="info">
        <h1>{title}</h1>
        <p>{summary}</p>
        <div className="btn-container">
          {!inStarred(movie.id, starred) ? (
            <button
              className="btn"
              onClick={() => addToStarred(dataDispatch, movie)}
            >
              Star
            </button>
          ) : (
            <button
              className="btn"
              onClick={() => removeFromStarred(dataDispatch, movie)}
            >
              {true ? "Starred" : "Unstar"}
            </button>
          )}
          {!inWatchList(movie.id, watchlist) ? (
            <button
              className="btn"
              onClick={() => addToWatchlist(dataDispatch, movie)}
            >
              Add to WatchList
            </button>
          ) : (
            <button
              className="btn"
              onClick={() => removeFromWatchlist(dataDispatch, movie)}
            >
              {true ? "Added to WatchList" : "Remove from watch list"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
