const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
const express = require("express");
const app = express();
const cors = require("cors");

const dbConfig = require("./util/database");

const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

const router = require("./routes");

app.use(router);

dbConfig();
app.listen(port, () => {
  console.log("Server is up and running");
});
