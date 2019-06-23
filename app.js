var express       = require('express'),
    app           = express(),
    bodyParser    = require('body-parser'),
    mongoose      = require('mongoose'),
    LocalStrategy = require('passport-local'),
    passport      = require('passport'),
    flash         = require('connect-flash'),
    methodOverride = require('method-override'),
    User          = require('./models/user'),
    seedDB        = require('./seeds');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

var mongoUrl  = process.env.DATABASE_URL || "mongodb://localhost/scoremyride";
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true
});

//optional default config for db
seedDB();

// PASSPORT CONFIG
app.use(require('express-session')({
    secret: "sspl is gonna get shit done",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    res.locals.currentUser = req.user;
    next();
});



var wavetypeRoutes = require('./routes/wavetypes'),
    indexRoutes    = require('./routes/index');

app.use(indexRoutes);
app.use(wavetypeRoutes);

const port = process.env.PORT || 5050
    
app.listen(port, function(){
    console.log("ScoreMyRide Server Started");
});