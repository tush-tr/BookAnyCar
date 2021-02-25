module.exports = () =>{
    'use strict';
    var aboutRoute = require('express').Router();
    aboutRoute.route("/")
    .get((req, res,next)=> {
        res.render("about")    
    }) 
    return aboutRoute;
};