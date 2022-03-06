import Header from "../../components/header";
import Footer from "../../components/footer";
import Slide from "../../components/slide";
const Cars = () => {
  return (
    <div>
      <Header />
      <div class="home-intro">
        <h2>Select the car you want</h2>
      </div>
      <Slide />
      <div class="car-list-container"></div>
      <Footer />
    </div>
  );
};
export default Cars;