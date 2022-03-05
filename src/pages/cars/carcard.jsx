const CarCard = ({ carImg, car, fair, model }) => {
  return (
    <div className="car-card">
      <div className="car-img">
        <img src={"/car-images/" + carImg} />
      </div>
      <div className="car-about-sec">
        <div className="car-name">
          <span>Car Details: </span>
          {car}
        </div>
        <div className="car-model">
          <span>Car Model: </span>
          {model}
        </div>
        <div className="car-fair">
          <span>Car fair Price: </span>
          {fair}
        </div>
        <button className="book-car">Book Now</button>
      </div>
    </div>
  );
};
