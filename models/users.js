const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	name: String,
    email: String,
    password: String,
	cart: {type: mongoose.Schema.Types.ObjectId, ref: 'carts'},
	bookings: [{type: mongoose.Schema.Types.ObjectId, ref: 'bookings'}],
	
});

const User = mongoose.model('users', userSchema);

module.exports = User;