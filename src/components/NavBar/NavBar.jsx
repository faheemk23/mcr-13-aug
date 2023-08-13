import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <h1>IMDB</h1>
      <SearchBar />
      <div className="links-container">
        <Link className="links" to="/">
          Movies
        </Link>
        <Link className="links" to="/watchlist">
          Watch List
        </Link>
        <Link className="links" to="/starred">
          Starred Movies
        </Link>
      </div>
    </nav>
  );
}
