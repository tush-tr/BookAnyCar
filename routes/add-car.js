const resData = [];
const route=(data)=> {
    'use strict';
		const express = require("express");
    var addCarRoutes = express.Router();
    addCarRoutes.route("/")
    .get((req, res,next)=> {
        // res.render("")
        res.json(data)        
    })
    .post((req,res)=>{
				console.log(req.body);
        resData.push(req.body);
    })   
    return addCarRoutes;
};

module.exports = {route, resData};
