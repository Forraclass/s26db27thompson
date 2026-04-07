var Fruit = require('../models/fruit');
// List of all 
exports.fruit_list = async function(req, res) {
try{
theFruits = await Fruit.find();
res.send(theFruits);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};;

// for a specific Fruit.
exports.fruit_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Fruit detail: ' + req.params.id);
};
// Handle Fruit create on POST.
exports.fruit_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Fruit create POST');
};
// Handle Fruit delete from on DELETE.
exports.fruit_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Fruit delete DELETE ' + req.params.id);
};
// Handle Fruit update form on PUT.
exports.fruit_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Fruit update PUT' + req.params.id);
};
