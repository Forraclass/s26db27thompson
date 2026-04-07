var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('quixoticFruit', { title: 'Search Results: Quixotic Fruits' });
});

module.exports = router;
