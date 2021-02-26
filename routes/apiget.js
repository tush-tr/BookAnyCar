module.exports = (Car) => {
    'use strict';
    var carsListRoute = require('express').Router();
    carsListRoute.route("/")
        .get((req, res, next) => {
            Car.find((err, foundArticles) => {
                if (!err) {
                    res.send(foundArticles);
                }
                else {
                    console.log(err);
                }
            })
        })
    return carsListRoute;
};