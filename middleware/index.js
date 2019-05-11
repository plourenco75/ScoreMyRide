// all the middleware goes here
var Wavetype    = require('../models/wavetype');

var middlewareObj = {};



middlewareObj.isLoggedIn = function (req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that!");
    res.redirect("/login");
}


middlewareObj.checkWavetypeOwnership = function (req, res, next){
    if (req.isAuthenticated()) {
        Wavetype.findById(req.params.id, function(err, foundWavetype){
            if (err){
                req.flash("error", "Wavetype not found");
                res.redirect("back");
            } else {
                //does user own Wavetype?
                if (foundWavetype.author.id.equals(req.user._id) ) {
                    next();
                } else {
                    req.flash("error", "You do not own this Wavetype");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You must be logged in to do that");
        res.redirect("back");
    }
}



module.exports = middlewareObj;