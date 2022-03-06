import "./App.css";
import HomePage from "./pages/Home";
import AddCarPage from "./pages/addcar";
import CarsPage from "./pages/cars";
import AboutPage from "./pages/about";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/addcar" element={<AddCarPage />} />
        <Route path="/cars" element={<CarsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
