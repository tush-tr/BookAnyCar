module.exports = (Car) => {
    'use strict';
    var carsListRoute = require('express').Router();
    carsListRoute.route("/")
        .get((req, res, next) => {
            Car.find((err, foundItems) => {
                if (err) {
                    console.log(err);
                }
                res.render("cars", { carList: foundItems })
            })

            // res.json(data)        
        })
    return carsListRoute;
};