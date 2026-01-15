const express = require('express');
const router = express.Router();
const { auth, isAdmin } = require('../middleware/auth');
const { getAllBookings, updateBookingStatus } = require('../controllers/adminController');
router.get('/bookings', auth, isAdmin, getAllBookings);
router.put('/booking/:id/status', auth, isAdmin, updateBookingStatus);
module.exports = router;
