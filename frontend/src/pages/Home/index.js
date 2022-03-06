import Header from "../../components/header";
import "./home.css";
import AboutSection from "../../components/aboutsection";
import Footer from "../../components/footer";
import WhySection from "../../components/whysection";
import Slide from "../../components/slide";
const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="home-intro">
          <h2>Get Any Car on Rent</h2>
        </div>
        <section className="home-section-main">
          <div>
            <h1> Book a City Taxi to your destination in town</h1>
            <p> Choose from a range of categories and prices</p>
          </div>
        </section>

        <AboutSection />
        <WhySection />
        <Slide />
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
