var express  = require('express');
var router   = express.Router();
var passport = require('passport');

var User    = require('../models/user')

router.get("/", function(req, res){
    // res.send("this will be the landing page");
    res.render("landing");
});


// =================
// AUTH ROUTES
router.get("/register", function(req, res){
    res.render("register");
});
// handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if (err) {
            req.flash("error", err.message);
            return res.redirect("/register");
        }
        req.flash("success", "Welcome to Score My Ride " + req.body.username + " !");
        passport.authenticate("local")(req, res, function(){
            res.redirect("/wavetypes");
        });
    });
});

//show login form
router.get("/login", function(req,res){
    res.render("login");
});

//handle login logic
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/wavetypes",
        failureRedirect: "/login"
    }), function(req, res){
});

// logout route
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Logged you out!");
    res.redirect("/wavetypes");
});

// show change password form
router.get("/changepwd", function(req, res){
    res.render("changepwd");
});

// handle password change
router.post("/changepwd", function(req, res){
    console.log(req.body);
    // console.log(user);
    passport.authenticate("local")(req, res, function(){
    //     user.changePassword(req.body.oldPassword, req.body.newPassword, function(err, user){
            if (err) {
                req.flash("error", err.message);
                res.redirect("/wavetypes");
            } else {
                req.flash("success", "Password changed successfully for " + user.username);
                res.redirect("/wavetypes");
            }
        });
    // });
});

module.exports = router;
