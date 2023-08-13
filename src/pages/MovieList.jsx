import { useContext } from "react";

import Filters from "../components/Filters/Filters";
import MovieCard from "../components/MovieCard/MovieCard";
import { DataContext } from "../contexts/DataContext";
import "./Pages.css";

export default function MovieList({ searchInput }) {
  const {
    dataState: { movies },
  } = useContext(DataContext);

  let filteredMovies = movies;

  const matchString = (stringToMatch, searchInput) => {
    return stringToMatch.toLowerCase().includes(searchInput.toLowerCase());
  };

  if (searchInput !== "") {
    filteredMovies = filteredMovies.filter(
      ({ title, cast, director }) =>
        matchString(title, searchInput) ||
        matchString(director, searchInput) ||
        cast.some((name) => matchString(name, searchInput))
    );
  }

  console.log(searchInput);
  return (
    <div className="page ">
      <Filters />
      <section className="movie-listing">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
}
