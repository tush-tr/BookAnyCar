module.exports = (User) => {
    'use strict';
    var loginRoute = require('express').Router();
    loginRoute.route("/")
        .get((req, res) => {
            res.render("login")
        })
        .post((req, res) => {
            const username = req.body.username;
            const password = req.body.password;
            User.findOne({ user: username }, (err, foundUser) => {
                if (err) {
                    console.log(err);
                }
                else {
                    if (foundUser) {
                        if (foundUser.password === password) {
                            res.render("add-car");
                        }
                        else {
                            res.redirect("/login")
                        }
                    }
                    else {
                        res.redirect("/login")
                    }
                }
            })
        })
    return loginRoute;
};