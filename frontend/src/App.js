import "./App.css";
import HomePage from "./pages/Home";
import AddCarPage from "./pages/addcar";
import CarsPage from "./pages/cars";
import AboutPage from "./pages/about";
import Header from "./components/header";
import Footer from "./components/footer";
import Slide from "./components/slide";
import AboutSection from "./components/aboutsection";
import WhySection from "./components/whysection";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/addcar" element={<AddCarPage />} />
          <Route path="/cars" element={<CarsPage/>} />
        </Routes>
      </Router>
      <AboutSection />
      <WhySection />
      <Slide />
      <Footer />
    </div>
  );
}

export default App;
