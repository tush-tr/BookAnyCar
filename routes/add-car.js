module.exports = (function() {
    'use strict';
    var addCarRoutes = require('express').Router();
    addCarRoutes.route("/")
    .get((req, res)=> {
        // res.render("")
        res.json({
            car: "Alto",
            model: "2018",
            fair: "$200"
        })
    });
    



    
    return addCarRoutes;
})();