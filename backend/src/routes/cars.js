const router = require("express").Router();
const Car = require("../models/Car");
const authenticateToken = require("../middlewares/jwtAuth")
const {getCars} = require("../controllers/carController")
router.get("/cars",authenticateToken,getCars)
// router.get("/car/:carId",getCar)
// router.post("/car",postAddCar)
// router.put("/car",updateCar)
// router.delete("/car",deleteCar)
module.exports = router;