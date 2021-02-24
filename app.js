const express = require("express");
const homeRoutes = require("./routes/home");
const app = express();
const { static } = require("express");

// Home Routes
app.use("/",homeRoutes);






app.listen(3500,()=>{
    console.log("Server is running on port 3500");
})