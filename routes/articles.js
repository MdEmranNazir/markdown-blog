const router = require('express').Router();
const Article = require('../models/article');

// articles/new
router.get('/new', (req, res) => {
    res.render('articles/new.ejs'); 
});

module.exports =  router;