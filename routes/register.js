module.exports = (User) => {
    'use strict';
    var registerRoute = require('express').Router();
    registerRoute.route("/")
        .get((req, res) => {
            res.render("register")
        })
        .post((req, res) => {
            const newUser = new User({
                user: req.body.username,
                password: req.body.password
            })
            newUser.save((err) => {
                if (err) {
                    console.log("Error in saving post request for register page");
                } else {
                    res.render("add-car")
                }
            })
        })
    return registerRoute;
};