const Booking = require('../models/Booking');

exports.getPendingForDriver = async (req, res) => {
  const bookings = await Booking.find({ status: 'PENDING' }).sort({ createdAt: 1 }).limit(20).populate('userId','name phone');
  res.json(bookings);
}

exports.acceptBooking = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) return res.status(404).json({ message: 'Not found' });
  booking.status = 'CONFIRMED';
  booking.driverId = req.user._id;
  await booking.save();
  const io = require('../socket').getIo();
  if (io) io.to(booking._id.toString()).emit('booking-updated', booking);
  res.json(booking);
}

exports.startTrip = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  booking.status = 'ON_TRIP';
  await booking.save();
  const io = require('../socket').getIo();
  if (io) io.to(booking._id.toString()).emit('booking-updated', booking);
  res.json(booking);
}

exports.completeTrip = async (req, res) => {
  const { finalFare, payment } = req.body;
  const booking = await Booking.findById(req.params.id);
  booking.status = 'COMPLETED';
  booking.finalFare = finalFare || booking.estimatedFare;
  if (payment) booking.payment = payment;
  await booking.save();
  const io = require('../socket').getIo();
  if (io) io.to(booking._id.toString()).emit('booking-updated', booking);
  res.json(booking);
}
