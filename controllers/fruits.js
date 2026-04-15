var Fruit = require('../models/fruit');

// List of all Fruits
exports.fruit_view_all_Page = async function(req, res) {
try{
    const theFruits = await Fruit.find();
    res.render('quixoticFruit', { title: 'Fruit Search Results', results: theFruits });
}
catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
}
};;

//Get a single Fruit
exports.fruit_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        const result = await Fruit.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send({"error": `document for id ${req.params.id} not found`});
    }
};

// Handle Fruit create on POST.
exports.fruit_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Fruit();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"fruit_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.color = req.body.color;
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
exports.fruit_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Fruit.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
    res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle Fruit update form on PUT.
exports.fruit_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Fruit.findById( req.params.id)
        // Do updates of properties
        if(req.body.name) 
            toUpdate.name = req.body.name;
        if(req.body.color) 
            toUpdate.color = req.body.color;
        if(req.body.marketPrice) 
            toUpdate.marketPrice = req.body.marketPrice;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}failed`);
    }
};

// Handle a show one view with id specified by query
exports.fruit_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
        let result = await Fruit.findById( req.query.id)
        res.render('fruitdetail',
    { title: 'Fruit Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};