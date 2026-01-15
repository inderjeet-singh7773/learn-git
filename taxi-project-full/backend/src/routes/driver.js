const express = require('express');
const router = express.Router();
const { auth, isDriver } = require('../middleware/auth');
const { getPendingForDriver, acceptBooking, startTrip, completeTrip } = require('../controllers/driverController');
router.get('/bookings', auth, isDriver, getPendingForDriver);
router.put('/bookings/:id/accept', auth, isDriver, acceptBooking);
router.put('/bookings/:id/start', auth, isDriver, startTrip);
router.put('/bookings/:id/complete', auth, isDriver, completeTrip);
module.exports = router;
