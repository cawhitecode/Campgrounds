var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")

var data = [
  
]

// removes all Campgrounds from DB
function seedDB(){
  Campground.remove({}, function(err){
    if(err){
      console.log(err);
    }
    console.log("Campgrounds removed");
    // add a few campgrounds
    data.forEach(function(seed){
      Campground.create(seed, function(err, campground){
        if(err){
          con.log(err)
        } else {
          console.log("campground added");
          Comment.create(
            {
              text: "This place is great, but I wish there was internet!",
              author: "Greg"
            }, function(err, comment){
              if(err){
                console.log(err)
              } else {                
                campground.comments.push(comment);
                campground.save();
                console.log("Created a new comment");
              }
            })        
        }
      });    
    });
  })
}


module.exports = seedDB;