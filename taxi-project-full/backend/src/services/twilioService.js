// const twilio = require('twilio');
// const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// exports.sendOtp = async (phone) => {
//   return client.verify.services(process.env.TWILIO_VERIFY_SID).verifications.create({ to: phone, channel: 'sms' });
// }

// exports.verifyOtp = async (phone, code) => {
//   return client.verify.services(process.env.TWILIO_VERIFY_SID).verificationChecks.create({ to: phone, code });
// }

// for test only

module.exports = {
  sendSMS: async () => {
    console.log("SMS disabled in test mode");
  },
};
