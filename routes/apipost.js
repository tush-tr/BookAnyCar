module.exports = (Car) => {
    'use strict';
    const express = require("express");
    var addCarRoutes = express.Router();
    addCarRoutes.route("/")
        .post((req, res) => {
            let dataForAdd = new Car(
                {
                    car: req.body.car,
                    model: req.body.model,
                    fair: req.body.fair,
                    img: filename
                })
            dataForAdd.save() 
            
        })
    return addCarRoutes;
};