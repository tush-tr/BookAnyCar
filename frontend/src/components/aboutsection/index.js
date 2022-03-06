import './style.css'
const AboutSection = () => {
  return (
    <section className="about-main-section">
      <h2 className="about-section-heading">A car for every occasion</h2>
      <p className="about-section-para">
        We offers city taxies, cars for your every occasin on the best prices.
      </p>
      <div className="about-section-card-container">
        <div className="about-section-card">
          <img src="https://www.alabamamediagroup.com/wp-content/uploads/2017/04/newcar2-1030x687.jpg" alt=""/>
          <div>
            <h3>CITY TAXI</h3>
            <p>
              The perfect way to get through your everyday travel needs. City
              taxis are available 24/7 and you can book and travel in an
              instant. With rides starting from as low as Rs. 6/km, you can
              choose from a wide range of options! You can also opt to do your
              bit for the environment with Ola Share!
            </p>
          </div>
        </div>
        <div className="about-section-card">
          <img src="https://www.credit.com/wp-content/uploads/2016/10/car-loans-612x281.jpg" alt=""/>
          <div>
            <h3>OUTSTATION</h3>
            <p>
              Ride out of town at affordable one-way and round-trip fares with
              Ola{"'"}s intercity travel service. Choose from a range of AC cabs
              driven by top partners, available in 1 hour or book upto 7 days in
              advance. We have you covered across India with presence in 90+
              cities with over 500 one way routes.
            </p>
          </div>
        </div>
        <div className="about-section-card">
          <img src="https://www.magnifymoney.com/mmassets/uploads/2016/07/iStock_84439397_MEDIUM-e1468909231318-1-e1469425068437.jpg" alt="" />
          <div>
            <h3>RENTALS</h3>
            <p>
              With Ola Rentals you get a cab at your disposal. So be it a day
              long business meeting, a shopping trip with your friends or just a
              day out in a new city, we have you covered. Packages start at 1
              hour and can be extended upto 12 hours!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;