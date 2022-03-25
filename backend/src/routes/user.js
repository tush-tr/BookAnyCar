const router = require("express").Router();
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const { hashPassword } = require("../util/auth");
const checkUsername = require("../helpers/checkusername");
const isAuthenticated = require("../helpers/authenticate");
router.post("/user/login", async (req, res) => {
  // authenticate user

  const user = req.body.user;
  const password = req.body.password;
  const isAuthenticatedUser = await isAuthenticated({ user, password });
  console.log(isAuthenticatedUser);
  if (!isAuthenticatedUser) {
    return res.status(401).send("Unauthorized");
  }

  const userData = { name: user, password: password };

  const accessToken = jwt.sign(userData, process.env.ACCESS_TOKEN);
  res.json({ accessToken: accessToken });
});
router.post("/user/signup", async (req, res) => {
  const email = req.body.email;
  const user = req.body.user;
  const password = req.body.password;
  const isUserExist = await checkUsername(user);
  if (isUserExist) {
    return res.status(201).json({ message: "user exists" });
  }
  const hashedPassword = await hashPassword(password);
  const saveUser = new User({
    user: user,
    email: email,
    password: hashedPassword,
    role: req.body.role
  });
  await saveUser.save();
  let {password:savedPassword,...otherUserData} = saveUser._doc
  res.status(200).json(otherUserData);
});
module.exports = router;
