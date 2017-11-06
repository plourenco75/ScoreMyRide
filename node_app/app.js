var express       = require('express'),
    app           = express(),
    bodyParser    = require('body-parser'),
    mongoose      = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var indexRoutes = require('./routes/index');

app.use(indexRoutes);

app.listen(5000, function(){
    console.log("ScoreMyRide Server Started");
});