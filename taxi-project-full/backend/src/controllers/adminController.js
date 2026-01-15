const Booking = require('../models/Booking');

exports.getAllBookings = async (req, res) => {
  try {
    const { status } = req.query;
    const q = status ? { status } : {};
    const bookings = await Booking.find(q).sort({ createdAt: -1 }).populate('userId','name email phone');
    res.json(bookings);
  } catch (err) { console.error(err); res.status(500).json({ message: 'Server error' }); }
}

exports.updateBookingStatus = async (req, res) => {
  try {
    const { status, driverId } = req.body;
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Not found' });
    booking.status = status;
    if (driverId) booking.driverId = driverId;
    await booking.save();
    const io = require('../socket').getIo();
    if (io) io.to(booking._id.toString()).emit('booking-updated', booking);
    res.json(booking);
  } catch (err) { console.error(err); res.status(500).json({ message: 'Server error' }); }
}
