var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  cookieParser = require("cookie-parser"),
  LocalStrategy = require("passport-local"),
  flash = require("connect-flash"),
  Campground = require("./models/campground"),
  Comment = require("./models/comment"),
  User = require("./models/user"),
  session = require("express-session"),
  seedDB = require("./seeds"),
  methodOverride = require("method-override");

// requiring routes
var commentRoutes = require("./routes/comments"),
  campgroundRoutes = require("./routes/campgrounds"),
  indexRoutes = require("./routes/index")

// Seeds DB and resets
//seedDB(); 

// moongoose DB connection
//mongoose.connect('mongodb+srv://*****:********@campgrounds-8su9n.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connect("mongodb://localhost:27018/campgounds_app", {
  useNewUrlParser: true
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
app.use(cookieParser('secret'));

// Passport Config
app.use(require("express-session")({
  secret: "hehe",
  resave: false,
  saveUninitialized: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});


app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
// listener live
//app.listen(process.env.PORT || 5000)
// codeanywhere port
app.listen(3000, function() {
  console.log('Server listening on port 3000');
});