var express  = require('express');
var router   = express.Router();

var Wavetype    = require('../models/wavetype');

router.get("/", function(req, res){
    res.render("landing");
});


router.get("/scorebuilder", function(req, res){
    // Get all wavetypes from DB
    Wavetype.find({}, function(err, allWavetypes){
        if (err) {
            console.log(err);
        } else {
            res.render("scorebuilder", {wavetypes: allWavetypes});
        }
    })
});


module.exports = router;
