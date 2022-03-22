const mongoose = require("mongoose");
const config = require("./secrets")

const configDb = async () => {
  const connection = await mongoose.connect(
    `mongodb+srv://${config.mongoAdmin}:${config.mongoPassword}@cluster0.f729m.mongodb.net/cars?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  );
};
module.exports = configDb;
