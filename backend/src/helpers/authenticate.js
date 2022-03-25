const User = require("../models/User");
const { comparePasswords } = require("../util/auth");
const isAuthenticated = async ({ user, password }) => {
  const foundUser = await User.find({ user: user });
  if (!foundUser.length) {
    return false;
  }
  const isPasswordCorrect = comparePasswords(foundUser[0].password, password);
  if (isPasswordCorrect) {
    return true;
  }
  return true;
};
module.exports = isAuthenticated;
