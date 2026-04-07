const mongoose = require("mongoose")
const fruitSchema = mongoose.Schema({
	name: String,
	color: String,
	marketPrice: Number
})

module.exports = mongoose.model("Fruit", fruitSchema)
