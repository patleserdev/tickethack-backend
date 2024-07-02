const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
	tripId : Number
	
});

const Cart= mongoose.model('carts', cartSchema);

module.exports = Cart;