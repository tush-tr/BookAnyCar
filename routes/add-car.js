const resData = [];
const route=(data)=> {
    'use strict';
    var addCarRoutes = require('express').Router();
    addCarRoutes.route("/")
    .get((req, res,next)=> {
        // res.render("")
        res.json(data)        
    })
    .post((req,res)=>{

        console.log(req.body);
    })   
    return addCarRoutes;
};

module.exports = {route, resData};
