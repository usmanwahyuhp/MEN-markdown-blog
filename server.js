// import express from 'express';
const express = require('express');
const articleRouter = require('./routes/articles.js');

const app = express();
const PORT = 5000;

app.listen(PORT, () =>console.log(`Server Running on port: http://localhost:${PORT}`));

app.use('/articles', articleRouter)

app.set('view engine', 'ejs')

app.get("/", (req, res) => res.render('index'));