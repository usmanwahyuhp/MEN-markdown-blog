const express = require('express');
const router = express.Router();

router.get("/new", (req, res) => res.render('article/new'));
// router.get("/", (req, res) => res.send('in articles'));

module.exports = router