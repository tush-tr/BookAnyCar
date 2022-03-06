const express = require("express");
const app = express();
const cors = require("cors");

const dbConfig = require("./util/database");

const port = 3000 || process.env.PORT;
app.use(cors())
app.use(express.json())
const {router:adminRouter,adminJS} = require("./routes/admin-panel") 
const carsRouter = require("./routes/cars")

app.use(adminJS.options.rootPath,adminRouter)
app.use("/api/v1",carsRouter)
dbConfig();
app.listen(port, () => {
  console.log("Server is up and running");
});
