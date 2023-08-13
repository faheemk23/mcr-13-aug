import { Route, Routes } from "react-router-dom";

import "./App.css";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      mcr
      <Routes>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
