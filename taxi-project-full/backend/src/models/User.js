const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true, required: true },
  phone: { type: String },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['user','admin','driver'], default: 'user' },
  isPhoneVerified: { type: Boolean, default: false },
  profilePic: { type: String },
  createdAt: { type: Date, default: Date.now }
});

UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.passwordHash);
}

module.exports = mongoose.model('User', UserSchema);
