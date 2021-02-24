module.exports = (data) =>{
    'use strict';
    var carsListRoute = require('express').Router();
    carsListRoute.route("/")
    .get((req, res,next)=> {
        // res.render("")
        res.json(data)        
    }) 
    return carsListRoute;
};