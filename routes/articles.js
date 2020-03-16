const router = require('express').Router();

// articles/new
router.get('/new', (req, res) => {
    res.render('articles/new.ejs'); 
});

module.exports =  router;