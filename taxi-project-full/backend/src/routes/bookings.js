const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { createBooking, getUserBookings, getBooking } = require('../controllers/bookingController');
router.post('/', auth, createBooking);
router.get('/user', auth, getUserBookings);
router.get('/:id', auth, getBooking);
module.exports = router;
