const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
	trip : {type: mongoose.Schema.Types.ObjectId, ref: 'Trips'}
	
});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;