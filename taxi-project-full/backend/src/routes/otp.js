const express = require('express');
const router = express.Router();
const { sendOtp, verifyOtp } = require('../services/twilioService');

router.post('/send', async (req, res) => {
  try {
    const { phone } = req.body;
    const resp = await sendOtp(phone);
    res.json(resp);
  } catch (err) { console.error(err); res.status(500).json({ message: 'OTP send failed' }); }
});

router.post('/verify', async (req, res) => {
  try {
    const { phone, code } = req.body;
    const resp = await verifyOtp(phone, code);
    res.json({ valid: resp.status === 'approved' });
  } catch (err) { console.error(err); res.status(500).json({ message: 'OTP verify failed' }); }
});

module.exports = router;
