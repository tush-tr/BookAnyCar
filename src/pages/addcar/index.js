import Header from "../../components/header";
import AboutSection from "../../components/aboutsection";
import Footer from "../../components/footer";
import WhySection from "../../components/whysection";
import Slide from "../../components/slide";
const AddCar = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="home-intro">
          <h2>Give your car on rent and earn money</h2>
        </div>
        <form action="/addcar" method="post" encType="multipart/form-data">
          <div className="form-group mb-3">
            <label htmlFor="title">Car Details: </label>
            <input className="form-control" type="text" name="car" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="post">Model Name: </label>
            <input className="form-control" type="text" name="model" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="post">Fair price: </label>
            <input className="form-control" type="text" name="fair" />
          </div>
          <input type="file" name="image" id="upload-file" />
          <button type="submit" className="btn btn-primary">
            Add your Car
          </button>
        </form>
        <AboutSection />
        <WhySection />
        <Slide />
      </div>
      <Footer />
    </div>
  );
};
export default AddCar;