var express  = require('express');
var router   = express.Router();

router.get("/", function(req, res){
    res.render("landing");
});


router.get("/scorebuilder", function(req, res){
    res.render("scorebuilder");
});


module.exports = router;
