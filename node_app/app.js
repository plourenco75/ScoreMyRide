var express       = require('express'),
    app           = express(),
    bodyParser    = require('body-parser'),
    mongoose      = require('mongoose');
    seedDB        = require('./seeds');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

var mongoUrl  = process.env.DATABASEURL || "mongodb://localhost/scoremyride";
mongoose.connect(mongoUrl);

//optional default config for db
seedDB();


var indexRoutes = require('./routes/index');

app.use(indexRoutes);

app.listen(5000, function(){
    console.log("ScoreMyRide Server Started");
});