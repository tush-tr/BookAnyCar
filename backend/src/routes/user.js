const router = require("express").Router();
const jwt = require("jsonwebtoken");

const { hashPassword } = require("../util/auth");
const isAuthenticated = require("../helpers/authenticate");
router.post("/login", async (req, res) => {
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
router.post("/signup", async (req, res) => {
  const user = req.body.user;
  const password = req.body.password;
  

});
module.exports = router;
