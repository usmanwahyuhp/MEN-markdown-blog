// import express from 'express';
const express = require('express');
const articleRouter = require('./routes/articles.js');
const mongoose = require('mongoose');
const Article = require('./models/article');
const methodOverride = require('method-override');
const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

app.listen(PORT, () =>console.log(`Server Running on port: http://localhost:${PORT}`));
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// create an object to pass at index.js

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({
    createdAt: 'desc'
  })
  res.render('articles/index', { articles: articles})
});

app.use('/articles', articleRouter)