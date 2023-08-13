import DetailCard from "../components/DetailCard/DetailCard";
import Filters from "../components/Filters/Filters";
import "./Pages.css";

export default function MovieList() {
  return (
    <div className="page">
      <Filters />
      <DetailCard />
    </div>
  );
}
