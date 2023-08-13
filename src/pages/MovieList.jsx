import { useContext } from "react";

import Filters from "../components/Filters/Filters";
import MovieCard from "../components/MovieCard/MovieCard";
import { DataContext } from "../contexts/DataContext";
import "./Pages.css";

export default function MovieList() {
  const {
    dataState: { movies },
  } = useContext(DataContext);
  return (
    <div className="page ">
      <Filters />
      <section className="movie-listing">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
}
