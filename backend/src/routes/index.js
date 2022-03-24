const router = require("express").Router();
const { router: adminRouter, adminJS } = require("./admin-panel");
const carsRouter = require("./cars");
const swaggerRouter = require("./swagger");
const userRouter = require("./user");

router.use(swaggerRouter);
router.use(adminJS.options.rootPath, adminRouter);
router.use("/api/v1", carsRouter);
router.use("/api/v1",userRouter)
module.exports = router;
