const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const { pickup, drop, distanceKm, estimatedFare, carType, scheduledAt } = req.body;
    const booking = await Booking.create({ userId: req.user._id, pickup, drop, distanceKm, estimatedFare, carType, scheduledAt });
    res.json(booking);
  } catch (err) { console.error(err); res.status(500).json({ message: 'Server error' }); }
}

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) { console.error(err); res.status(500).json({ message: 'Server error' }); }
}

exports.getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('userId','name email phone');
    if (!booking) return res.status(404).json({ message: 'Not found' });
    res.json(booking);
  } catch (err) { console.error(err); res.status(500).json({ message: 'Server error' }); }
}
