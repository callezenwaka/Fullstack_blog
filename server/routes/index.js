'use strict';
const express = require("express");
const router  = express.Router();
//const middleware = require("../middleware");

router.get('/', function(req, res){
    res.render('index',{page: 'home'}); // change the path to your index.html
});

router.get('/about', (req,res) => {
    res.render('about',{page: 'about'});
})

router.get('/services', (req,res) => {
    res.render("services", {page: 'services'});
})
router.get('/career', (req,res) => {
    res.render("career", {page: 'career'});
})

module.exports = router;