const Car = require("../models/Car");
let car1 = new Car({
  car: "Alto",
  model: "2018",
  fair: "$200",
  img: "demo-img1.jpg",
});
let car2 = new Car({
  car: "Swift",
  model: "2015",
  fair: "$400",
  img: "demo-img2.jpg",
});
const demoCarArray = [car1, car2];

const insertDemoData = () => {
  Car.insertMany(demoCarArray, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Success");
    }
  });
};

module.exports = insertDemoData;
