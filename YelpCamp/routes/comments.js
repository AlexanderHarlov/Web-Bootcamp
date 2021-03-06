const express = require('express');
const Campground = require('../models/campground');
const Comment = require('../models/comment');

let router = express.Router({mergeParams: true});

router.get("/new", isLoggedIn, (req, res) => {
  Campground.findById( req.params.id, (err, campground) => {
    if(err){
      console.log(err);
    } else {
      res.render("comments/new", {campground: campground});
    }
  })
});

router.post("/", isLoggedIn, (req, res) => {
  Campground.findById( req.params.id, (err, campground) => {
    if(err){
      console.log(err);
      res.redirect("/campgrounds");
    } else {
      Comment.create( req.body.comment, (err, comment) => {
        if( err ){
          console.log(err);
        } else {
          comment.author.id = req.user._id;
          comment.author.username = req.user.username;
          comment.save();
          campground.comments.push(comment);
          campground.save();
          res.redirect("/campgrounds/" + campground._id );
        }
      });
    }
  });
});

function isLoggedIn( req, res, next ){
  if( req.isAuthenticated() ){
    return next();
  }
  res.redirect("/login");
}

module.exports = router;
