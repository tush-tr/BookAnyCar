const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: String,
  email: String,
  password: String,
  role: String
});
const User = mongoose.model("User", userSchema);
module.exports = User;