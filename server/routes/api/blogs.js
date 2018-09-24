'use strict';
const express = require("express");
const router  = express.Router();
const Blog = require("../../models/blogs");
//const middleware = require("../middleware");

/* GET ALL POSTS */
router.get('/', async (req, res, next) => {
  try {
    // Get all blogs from DB and return
    await Blog.find({}, (err, blogs) => {
      res.json(blogs);
    })
    .sort({ created_date: -1 });
  } catch (err) {
    next(err)
  }
});

/* SAVE A POST */
router.post('/', async (req, res, next) => {
  try {
    // get data from form and save to DB
    await Blog.create(req.body, (err, blog) => {
      //blog.save();
      res.send({
        message: 'Added document to DB'
      })
    });
  } catch(err) {
    next(err)
  }
});

/* SHOW A POST */
router.get('/:id', async (req, res, next) => {
  try {
    //find the blog with provided ID
    await Blog.findById(req.params.id, (err, blog) => {
      //render show template with that blog
      res.json({blog});
    });
  } catch(err) {
    next(err)
  }
});

/* UPDATE A POST */
// blog.update({ _id: id }, { $set: { size: 'large' }}, callback);
router.put('/:id', async (req, res, next) => {
  try {
    await Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, blog) => {
      console.log('Updated document with ID: ' + id)
      res.json({id})
    });
  } catch(err) {
    next(err)
  }
});

// DELETE - removes blog from the database
router.delete("/:id",async (req, res, next) => {
  try {
    await Blog.findByIdAndRemove({ _id: req.params.id }, (err, blog) => {
      console.log('Deleted document with ID: ' + _id)
      res.json({id})
    })
  } catch(err) {
    next(err)
  }
});

module.exports = router;