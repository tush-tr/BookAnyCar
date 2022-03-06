import './style.css'
const Slide = () => {
  return (
    <div
      id="introslide"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval={2000}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="slide-items">
            <img src="https://www.olacabs.com/webstatic/img/fleet-image/micro.png" alt=""/>
            <div>
              <h1 className="d-block w-100">Micro</h1>
              <h3>Small fairs for small rides</h3>
              <p>
                Compact yet comfortable AC cars that seat up to 3 people and
                give you great value for your money. Small fares for short
                rides.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="slide-items">
            <img src="https://www.olacabs.com/webstatic/img/fleet-image/share.png" alt=""/>
            <div>
              <h1>Share</h1>
              <h3>Eco Friendly rides at pocket-friendly rates</h3>
              <p>
                Fully air conditioned cars that you can share with others
                depending on your route and location.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="slide-items">
            <img src="https://www.olacabs.com/webstatic/img/fleet-image/prime-sedan.png" alt=""/>
            <div>
              <h1>Prime Sedan</h1>
              <h3>Sedans with free wifi and Top Drivers</h3>
              <p>
                Top rated drivers, and a hand-picked fleet of the best cars with
                extra legroom and boot space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slide;