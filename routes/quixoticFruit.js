var express = require('express');
const fruit_controllers= require('../controllers/fruits');
var router = express.Router();

/* GET home page. */
router.get('/', fruit_controllers.fruit_view_all_Page);

module.exports = router;
