const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
	tripId : Number
	
});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;