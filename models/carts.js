const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
	tripId : String
	
});

const Cart= mongoose.model('carts', cartSchema);

module.exports = Cart;