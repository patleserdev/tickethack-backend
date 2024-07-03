const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	name: String,
    email: String,
    password: String,
	cart: [{type: mongoose.Schema.Types.ObjectId, ref: 'trips'}],
	bookings: [{type: mongoose.Schema.Types.ObjectId, ref: 'trips'}],
	
});

const User = mongoose.model('users', userSchema);

module.exports = User;