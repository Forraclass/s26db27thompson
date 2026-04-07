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
router.get('/fruits', fruit_controller.fruit_list);
module.exports = router;