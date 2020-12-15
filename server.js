// import express from 'express';
const express = require('express');
const articleRouter = require('./routes/articles.js');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

app.listen(PORT, () =>console.log(`Server Running on port: http://localhost:${PORT}`));

app.use('/articles', articleRouter)

app.set('view engine', 'ejs')
// create an object to pass at index.js
const articles = [{
    title: 'Test Articles',
    createdAt: new Date(),
    description: 'description'
},
{
    title: 'Test Articles 2',
    createdAt: new Date(),
    description: 'description 2'
}]

app.get("/", (req, res) => res.render('articles/index', { articles: articles}));