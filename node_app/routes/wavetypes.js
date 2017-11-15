var express  = require('express');
var router   = express.Router();

var Wavetype    = require('../models/wavetype');

router.get("/", function(req, res){
    res.render("landing");
});

// INDEX - show all wavetypes
router.get("/wavetypes", function(req, res){
    // Get all wavetypes from DB
    // logic to check if logged in .. if so, then only retrieve wavetypes defined by that user only,
    // otherwise return only the wavetypes with username "default"
    Wavetype.find({}, function(err, allWavetypes){
        if (err) {
            console.log(err);
        } else {
            res.render("wavetypes/index", {wavetypes: allWavetypes, currentUser: req.user});
        }
    })
});

// SHOW - more info about one wavetype
router.get("/wavetypes/:id", function(req, res){
    //find the wavetype with provided ID
    Wavetype.findById(req.params.id, function(err, foundWavetype){
        if (err) {
            console.log(err);
        } else {
            // console.log(foundWavetype);
            res.render("wavetypes/show", {wavetype: foundWavetype});
        }
    })
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
