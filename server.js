const express = require('express');
const ArticleRouter = require('./routes/articles');

const app = express();

//view engine
app.set('view engine');

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

//Middleware
app.use('/articles', ArticleRouter);

// PORT
const PORT = process.env.PORT || 5000;
// PORT SETUP
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));