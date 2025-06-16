const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index'); // views/index.ejs → welcome page
});

module.exports = router;
