import "./SearchBar.css";

export default function SearchBar() {
  return (
    <input
      type="search"
      className="search-bar"
      placeholder="Search movies by title, cast and director..."
    />
  );
}
