const path = require('path');
// TODO: Importing Middlewares
const Resize = require('../middleware/resize');
const upload = require('../middleware/uploadmiddleware');

function CarData(car, model, fair, img) { this.car = car; this.model = model; this.fair = fair; this.img = img };

module.exports = (data) => {
    'use strict';
    const express = require("express");
    var addCarRoutes = express.Router();
    addCarRoutes.route("/")
        .get((req, res) => {
            res.render("add-car")
        })
        .post(upload.single('image'), async function (req, res) {
            const imagePath = path.join(__dirname, '../public/car-images');
            const fileUpload = new Resize(imagePath);
            if (!req.file) {
                data.push(req.body);
                res.redirect("/");
            }
            const filename = await fileUpload.save(req.file.buffer);
            let addData = new CarData(req.body.car,req.body.model, req.body.fair,filename);
            data.push(addData);
            res.redirect("/");
        });
    return addCarRoutes;
};

// console.log(req.body);
// data.push(req.body);