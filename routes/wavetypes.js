var express  = require('express');
var router   = express.Router();

var Wavetype    = require('../models/wavetype');
var middleware  = require('../middleware');


// INDEX - show all wavetypes
router.get("/wavetypes", function(req, res){
    // Get all wavetypes from DB
    // logic to check if logged in .. if so, then only retrieve wavetypes defined by that user only,
    // otherwise return ALL the wavetypes in the db!
    if (req.isAuthenticated()) {
        Wavetype.find({'author.username': req.user.username}, function(err, allWavetypes){
            if (err) {
                console.log(err);
                req.flash("error", err.message);
            } else {
                res.render("wavetypes/index", {wavetypes: allWavetypes, currentUser: req.user});
            }
        });
    } else {
        // get all the waves..
        Wavetype.find({}, function (err, allWavetypes){
            if (err) {
                console.log(err);
                req.flash("error", err.message);
            } else {
                res.render("wavetypes/index", {wavetypes: allWavetypes, currentUser: req.user});
            }
        });
    }
});


// NEW - form to add new wavetype
router.get("/wavetypes/new", middleware.isLoggedIn, function(req, res){
    res.render("wavetypes/new");
});


// CREATE - Add a new wavetype to db
router.post("/wavetypes", middleware.isLoggedIn, function(req,res){
    // res.send("YOU HIT THE POST ROUTE!!")
    //get data from form, add to wavetypes array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var supertube = req.body.supertube;
    var mediumtube = req.body.mediumtube;
    var smalltube = req.body.smalltube;
    var superturn = req.body.superturn;
    var mediumturn = req.body.mediumturn;
    var smallturn = req.body.smallturn;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newWavetype = {
        name: name, image: image, description: desc, author: author,
        supertube: supertube, mediumtube: mediumtube, smalltube: smalltube,
        superturn: superturn, mediumturn: mediumturn, smallturn: smallturn
    };
    console.log(req.user);
    //create a new Wavetype and save to DB
    Wavetype.create(newWavetype, function(err, newlyCreated){
        if (err) {
            req.flash("error", err.message);
            res.redirect("/wavetypes");
        } else {
            req.flash("success", "New wave type created!");
            //redirect to wavetypes page
            res.redirect("/wavetypes");
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


// EDIT wavetype route
router.get("/wavetypes/:id/edit", middleware.checkWavetypeOwnership, function(req, res){
    Wavetype.findById(req.params.id, function(err, foundWavetype){
        res.render("wavetypes/edit", {wavetype: foundWavetype});
    });
});

// UPDATE wavetype route
router.put("/wavetypes/:id", middleware.checkWavetypeOwnership, function(req, res){
    //find and update the correct wavetype
    Wavetype.findByIdAndUpdate(req.params.id, req.body.wavetype, function(err, updatedWavetype){
        if (err) {
            req.flash("error", err.message);
            res.redirect("/wavetypes");
        } else {
            req.flash("success", "Wavetype updated!");
            res.redirect("/wavetypes/" + req.params.id)
        }
    });
});

// DESTROY route
router.delete("/wavetypes/:id", middleware.checkWavetypeOwnership, function(req, res){
    Wavetype.findByIdAndRemove(req.params.id, function(err){
        if (err) {
            req.flash("error", err.message);
            res.redirect("/wavetypes");
        } else {
            req.flash("success", "wavetype deleted");
            res.redirect("/wavetypes");
        }
    })
});



// Redirect to main scoring app/page
router.get("/scorebuilder/:id", function(req, res){
    Wavetype.findById(req.params.id, function(err, foundWavetype){
        res.render("scorebuilder", {wavetype: foundWavetype});
    })
});


module.exports = router;
