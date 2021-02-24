module.exports = (data) =>{
    'use strict';
    var carsListRoute = require('express').Router();
    carsListRoute.route("/")
    .get((req, res,next)=> {
        res.render("cars",{carList: data})
        // res.json(data)        
    }) 
    return carsListRoute;
};