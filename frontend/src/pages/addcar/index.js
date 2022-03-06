import Header from "../../components/header";
import AboutSection from "../../components/aboutsection";
import Footer from "../../components/footer";
import WhySection from "../../components/whysection";
import Slide from "../../components/slide";
import AddCarForm from "./addcarform";
const AddCar = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="home-intro">
          <h2>Give your car on rent and earn money</h2>
        </div>
        <AddCarForm />
        <AboutSection />
        <WhySection />
        <Slide />
      </div>
      <Footer />
    </div>
  );
};
export default AddCar;
