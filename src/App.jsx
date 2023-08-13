import { Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Error from "./pages/Error";
import MovieDetail from "./pages/MovieDetail";
import MovieList from "./pages/MovieList";
import Starred from "./pages/Starred";
import Watchlist from "./pages/Watchlist";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/moviedetail/:movieId" element={<MovieDetail />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="starred" element={<Starred />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
