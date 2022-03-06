const mongoose = require("mongoose");
require("dotenv").config();
const config = {
  mongoAdmin: process.env.MONGO_ADMIN,
  mongoPassword: process.env.MONGO_PASSWORD,
};
const configDb = async () => {
  const connection = await mongoose.connect(
    `mongodb+srv://${config.mongoAdmin}:${config.mongoPassword}@cluster0.f729m.mongodb.net/cars?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  );

};
module.exports = configDb;
