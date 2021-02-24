const express = require("express");
const ejs = require("ejs");
const app = express();
const bodyParser = require("body-parser");
const { static } = require("express");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));

// TODO: Importing Routes
const homeRoutes = require("./routes/home");
const addCarRoutes = require("./routes/add-car");
const carsListRoutes = require("./routes/cars");


const data = [{
        car: "Alto",
        model: "2018",
        fair: "$200"
    },
    {
        car:"Swift",
        model: "2015",
        fair: "$400"
    }
]
// Home Routes
app.use("/", homeRoutes);
// addcar routes -- take data from user of car _POST
app.use("/addcar", addCarRoutes(data));
// Cars List Route -- showing data of cars
app.use("/cars",carsListRoutes(data));

// TODO: API
app.use("/api/addcar",require("./routes/apipost")(data));
app.use("/api/cars",require("./routes/apiget")(data));


app.listen(3500,()=>{
    console.log("Server is running on port 3500");
})
