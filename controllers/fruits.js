var Fruit = require('../models/fruit');

// List of all Fruits
exports.fruit_view_all_Page = async function(req, res) {
try{
    theFruits = await Fruit.find();
    res.render('quixoticFruit', { title: 'Fruit Search Results', results: theFruits });
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
exports.fruit_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Fruit();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.cost = req.body.color;
    document.marketPrice = req.body.marketPrice;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// Handle Fruit delete from on DELETE.
exports.fruit_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Fruit delete DELETE ' + req.params.id);
};

// Handle Fruit update form on PUT.
exports.fruit_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Fruit update PUT' + req.params.id);
};
