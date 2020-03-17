const express = require('express');
const mongoose = require('mongoose');
const Article = require('./models/article');
const articleRouter = require('./routes/articles');
const methodOverride = require('method-override');
const app = express();

//DB Connect
mongoose.connect('mongodb://localhost/markdown-blog', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
});

//view engine
app.set('view engine', 'ejs');

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Home route
app.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.render('articles/index', { articles: articles })
});

app.use('/articles', articleRouter);

// PORT
const PORT = process.env.PORT || 5000;
// PORT SETUP
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));