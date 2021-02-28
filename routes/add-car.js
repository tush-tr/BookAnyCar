const path = require('path');
// TODO: Importing Middlewares
const Resize = require('../middleware/resize');
const upload = require('../middleware/uploadmiddleware');

// function CarData(car, model, fair, img) { this.car = car; this.model = model; this.fair = fair; this.img = img };

module.exports = (Car) => {
    'use strict';
    const express = require("express");
    var addCarRoutes = express.Router();
    addCarRoutes.route("/")
        .get((req, res) => {
            res.render("user");
        })
        .post(upload.single('image'), async function (req, res) {
            const imagePath = path.join(__dirname, '../public/car-images');
            const fileUpload = new Resize(imagePath);
            if (!req.file) {
                res.redirect("/");
            }
            const filename = await fileUpload.save(req.file.buffer);
            // New document for adding to mongodb
            let dataForAdd = new Car(
                {
                    car: req.body.car,
                    model: req.body.model,
                    fair: req.body.fair,
                    img: filename
                })
            dataForAdd.save()           
            res.redirect("/");
        });
    return addCarRoutes;
};

// console.log(req.body);
// data.push(req.body);