module.exports=(data)=> {
    'use strict';
	const express = require("express");
    var addCarRoutes = express.Router();
    addCarRoutes.route("/")
    .post((req,res)=>{
		console.log(req.body);
        data.push(req.body);
    })   
    return addCarRoutes;
};