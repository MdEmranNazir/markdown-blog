const express = require('express');
const mongoose = require('mongoose');
const ArticleRouter = require('./routes/articles');

const app = express();

//DB Connect
mongoose.connect('mongodb://localhost/markdown-blog', {
    useNewUrlParser: true, useUnifiedTopology: true
});

//view engine
app.set('view engine');

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use('/articles', ArticleRouter);

// Router
app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test description'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test description 2'
        }];
    res.render('articles/index.ejs',{ articles: articles })
    
});

// PORT
const PORT = process.env.PORT || 5000;
// PORT SETUP
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));