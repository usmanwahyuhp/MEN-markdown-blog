const express = require('express');
const router = express.Router();

router.get("/new", (req, res) => res.render('articles/new'));
router.post("/", (req, res) => res.send('post new article'));

module.exports = router