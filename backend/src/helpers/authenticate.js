const User = require("../models/User");
const isAuthenticated = async ({ user, password }) => {
  const foundUser = await User.find({ user: user });
  if (!foundUser) {
    return false;
  }
  console.log({user,password})
  console.log(foundUser)
  if (foundUser[0].password != password) {
    return false;
  }
  return true;
};
module.exports = isAuthenticated;
