const User = require("../models/User");
module.exports = async (username) => {
  const userFound = await User.find({ user: username });
  if (userFound.length) {
    return true;
  }
  return false;
};
