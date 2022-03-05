const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

const port = 3000 || process.env.PORT



app.listen(port,()=>{
    console.log("Server is up and running")
})