const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  pickup: { address: String, lat: Number, lng: Number },
  drop: { address: String, lat: Number, lng: Number },
  distanceKm: Number,
  estimatedFare: Number,
  finalFare: Number,
  carType: { type: String, enum: ['Mini','Sedan','SUV'], default: 'Mini' },
  status: { type: String, enum: ['PENDING','CONFIRMED','REJECTED','ON_TRIP','COMPLETED','CANCELLED'], default: 'PENDING' },
  payment: { method: String, status: String, paymentId: String, orderId: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', BookingSchema);
