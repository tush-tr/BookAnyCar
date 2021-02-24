const express = require("express");
const ejs = require("ejs");
const app = express();
const { static } = require("express");
app.set('view engine', 'ejs');
app.use(express.static("public"));
// TODO: Importing Routes
const homeRoutes = require("./routes/home");





// Home Routes
app.use("/",homeRoutes);






app.listen(3500,()=>{
    console.log("Server is running on port 3500");
})