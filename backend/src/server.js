const path = require("path")
require("dotenv").config({path: path.resolve(__dirname,'./.env')});
const express = require("express");
const app = express();
const cors = require("cors");

const dbConfig = require("./util/database");

const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

const { router: adminRouter, adminJS } = require("./routes/admin-panel");
const carsRouter = require("./routes/cars");
const swaggerRouter = require("./routes/swagger")

app.use(swaggerRouter)
app.use(adminJS.options.rootPath, adminRouter);
app.use("/api/v1", carsRouter);
dbConfig();
app.listen(port, () => {
  console.log("Server is up and running");
});
