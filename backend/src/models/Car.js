const mongoose = require("mongoose");

const carlistSchema = new mongoose.Schema({
  car: String,
  model: String,
  fair: String,
  img: String,
});

const Car = mongoose.model("Car", carlistSchema);
module.exports = Car;
