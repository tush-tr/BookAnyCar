import Header from "../../components/header";
import AboutSection from "../../components/aboutsection";
import Footer from "../../components/footer";
import WhySection from "../../components/whysection";
import Slide from "../../components/slide";
import './about.css'
const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="about-heading">About Book Any Car</h1>
        <AboutSection />
        <WhySection />
        <Slide />
      </div>
      <Footer />
    </div>
  );
};
export default AboutPage;
