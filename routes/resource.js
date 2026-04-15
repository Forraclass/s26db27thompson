var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var fruit_controller = require('../controllers/fruits');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// Fruit ROUTES ///

// POST request for creating a Fruit.
router.post('/fruits', fruit_controller.fruit_create_post);

// DELETE request to delete Fruit.
router.delete('/fruits/:id', fruit_controller.fruit_delete);

// PUT request to update Fruit.
router.put('/fruits/:id', fruit_controller.fruit_update_put);

// GET request for one Fruit.
router.get('/fruits/:id', fruit_controller.fruit_detail);

// GET request for list of all Fruit items.
router.get('/fruits', fruit_controller.fruit_view_all_Page);

//GET detail fruit page
router.get('/detail', fruit_controller.fruit_view_one_Page);

// GET create fruit page
router.get('/create', fruit_controller.fruit_create_Page);

/* GET create update page */
router.get('/update', fruit_controller.fruit_update_Page);

/* GET delete fruit page */
router.get('/delete', fruit_controller.fruit_delete_Page);

module.exports = router;


