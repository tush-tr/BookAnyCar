module.exports = (function() {
    'use strict';
    var homeRoutes = require('express').Router();
    homeRoutes.route("/")
    .get((req, res)=> {
        res.render("home")
    });
    



    
    return homeRoutes;
})();