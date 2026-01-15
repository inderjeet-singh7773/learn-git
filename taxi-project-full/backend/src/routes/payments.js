const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { createOrder } = require('../services/razorpayService');
const Booking = require('../models/Booking');

router.post('/create-order', auth, async (req, res) => {
  try {
    const { bookingId, amount } = req.body;
    const order = await createOrder({ amount, receipt: `booking_${bookingId}` });
    if (bookingId) {
      await Booking.findByIdAndUpdate(bookingId, { 'payment.orderId': order.id });
    }
    res.json(order);
  } catch (err) { console.error(err); res.status(500).json({ message: 'Payment order failed' }); }
});

// webhook (raw body) - ensure in server.js this route uses express.raw
router.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  const shasum = require('crypto').createHmac('sha256', secret).update(req.body).digest('hex');
  if (shasum === req.headers['x-razorpay-signature']) {
    const payload = JSON.parse(req.body.toString());
    console.log('razorpay webhook', payload.event);
    return res.status(200).send('ok');
  }
  res.status(400).send('invalid signature');
});

module.exports = router;
