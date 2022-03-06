const Car = require("../models/Car");
// exports.postAddCar = async (req, res, next) => {
//   try {
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };
exports.getCars = async (req, res, next) => {
  try {
    const foundCars = await Car.find();
    res.status(200).json(foundCars)
  } catch (err) {
    res.status(500).json(err);
  }
};
