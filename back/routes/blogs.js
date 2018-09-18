'use strict';
const express = require("express");
const router  = express.Router();
const Blog = require("../models/blogs");
//const middleware = require("../middleware");

//INDEX - show all blog profiles
router.get('/', (req, res) => {
  // Get all blogs from DB and return res.send('Nothing to show :(')
  Blog.find({}, function(err, blogs){
    if(err){
      console.log(err);
    } else {
      res.render('blog/index', {blogs: blogs, page: 'blogs'});
    }
  })
  .sort({ created_date: -1 });
});

//NEW - show form to create for new blog
router.get('/publish', (req, res) => {
  res.render('blog/create',  {page: 'publish'});
});

//CREATE - add new blog to DB
router.post('/', function(req, res){
    // get data from form and save to DB
    //return res.redirect('/')
  Blog.create(req.body.blog, function(err, blog){
    if(err){
        console.log(err);
    } else {
      //redirect back to blog page
      res.redirect('/blogs');
    }
  });
});

// SHOW - shows more info about one blog
router.get('/:id', function(req, res){
  //find the blog with provided ID
  Blog.findById(req.params.id,function(err, blog){
      if(err || !blog){
          console.log(err);
          //req.flash('error', 'Sorry, this blog does not exist!');
          return res.redirect('/blogs');
      }
      //render show template with that blog
      res.render('blog/show', {blog: blog});
  });
});

// EDIT - shows edit form for a blog
router.get('/:id/edit', function(req, res){
  //render edit template with that blog
  Blog.findById(req.params.id,function(err, blog){
      if(err || !blog){
          console.log(err);
          //req.flash('error', 'Sorry, this blog does not exist!');
          return res.redirect('/blogs');
      }
      //render show template with that blog
      res.render('blog/edit', {blog: blog});
  });
});

// PUT - updates blog in the database
router.put('/:id', function(req, res){
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, blog){
      if(err){
          //req.flash("error", err.message);
          console.log(err);
          res.redirect("back");
      } else {
          //req.flash("success","Successfully Updated!");
          res.redirect('/blogs');
      }
  });
});

// DELETE - removes blog from the database
router.delete("/:id",function(req, res) {
  Blog.findByIdAndRemove({ _id: req.params.id }, function(err, blog) {
      if(err) {
          //req.flash('error', err.message);
          console.log(err);
          res.redirect('/blogs');
      } else {
        //req.flash('error', 'Blog deleted!');
        res.redirect('/blogs');
      }
    })
});

module.exports = router;