var express = require("express");
var router  = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");
var request = require("request");

// Show all campgrounds
router.get("/", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
       if(err){
           console.log(err);
       } else {
           res.render("campgrounds/index",{campgrounds:allCampgrounds, page: "campgounds"});
       }
    })
});

// New campground form
router.get("/new", middleware.isLoggedIn, function(req, res){
   res.render("campgrounds/new"); 
});

// Add new campground to DB - CREATE
router.post("/", middleware.isLoggedIn, function(req,res){
    var author = { id: req.user._id, username: req.user.username};
    var newCamp = { name: req.body.name, image: req.body.image, description: req.body.description, author: author, price: req.body.price};
    // Create a new campground and save to DB
    Campground.create(newCamp, function(err, newlyCreated){
        if(err){
            req.flash("error", "Something went wrong");
            console.log(err);
        } else {
            // redrirect back to campgrounds
            req.flash("success", "Successfully added Campground")
            res.redirect("/campgrounds");
        }
    })
});

// SHOW - shows more info about one campground
router.get("/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err || !foundCampground){
          req.flash("error", "Campground not found");
          res.redirect("/campgrounds")
          console.log(err);
        } else {            
          res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// Edit 
router.get("/:id/edit", middleware.checkUserCampground, function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("campgrounds/edit", {campground: foundCampground});
        }
    });
});

router.put("/:id", function(req, res){
    var newData = {name: req.body.name, image: req.body.image, description: req.body.description};
    Campground.findByIdAndUpdate(req.params.id, {$set: newData}, function(err, campground){
        if(err){
            req.flash("error", err.message);
            res.redirect("back");
        } else {
            req.flash("success","Successfully Updated!");
            res.redirect("/campgrounds/" + campground._id);
        }
    });
});

// Delete Campground
router.delete("/:id",middleware.checkUserCampground, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        } else {
          req.flash("sucess", "Campground deleted");
            res.redirect("/campgrounds");
        }
    })
});

module.exports = router;