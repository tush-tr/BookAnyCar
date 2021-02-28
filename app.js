// TODO: Import modules
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require("express"); 
const ejs = require("ejs"); // template engine
const app = express(); 
const bodyParser = require("body-parser"); // for parsing request bodies
const { static } = require("express");     // static files handling
const path = require('path');
const mongoose = require("mongoose");

// Define global variables
const port = process.env.PORT || 3500;
const mongoAdmin = process.env.mongoUser;
const mongoPassword = process.env.mongoPass;
// TODO: Importing Middlewares
const Resize = require('./middleware/resize');
const upload = require('./middleware/uploadmiddleware');

// TODO: Express specific stuff
app.set('view engine', 'ejs');  
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());   
app.use(express.static("public")); 

// TODO: Importing Routes
const homeRoutes = require("./routes/home");
const addCarRoutes = require("./routes/add-car");
const carsListRoutes = require("./routes/cars");
const aboutRoute = require("./routes/about");



// TODO: MongoDB Specific stuff
// Connect to the mongodb server
mongoose.connect(`mongodb+srv://${mongoAdmin}:${mongoPassword}@cluster0.f729m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{useNewUrlParser: true});
// Mongoose schema for cars list documents
const carlistSchema = new mongoose.Schema({
    car: String,
    model: String,
    fair: String,
    img: String
})

const userSchema = new mongoose.Schema({
    user: String,
    password: String
})

// Create a model
const Car = mongoose.model('Car',carlistSchema);
const User = mongoose.model("User", userSchema);




// TODO:_______________ Demo Data for testing__________
let car1 = new Car({
    car: "Alto",
    model: "2018",
    fair: "$200",
    img: "demo-img1.jpg"
})
let car2 = new Car({
    car:"Swift",
    model: "2015",
    fair: "$400",
    img: "demo-img2.jpg"
})
const demoCarArray = [car1,car2];
// Insert these demo items to the database 
// Car.insertMany(demoCarArray,(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Success");
//     }
// })
// ________________________________________

// Home Routes
app.use("/", homeRoutes);
// Addcar routes -- take data from user of car _POST
app.use("/addcar", addCarRoutes(Car));
// Cars List Route -- showing data of cars
app.use("/cars",carsListRoutes(Car));
// Route for about page
app.use("/about",aboutRoute())
// Route for users page

// Route for user registration
app.use("/register",require("./routes/register")(User))
// Route for login page
app.use("/login",require("./routes/login")(User));




// TODO: API 
app.use("/api/addcar",require("./routes/apipost")(Car));
app.use("/api/cars",require("./routes/apiget")(Car));




// Starting the server
app.listen(port,()=>{
    console.log("Server is running on port 3500");
})