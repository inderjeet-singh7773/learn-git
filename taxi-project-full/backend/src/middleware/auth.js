const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token' });
    const token = authHeader.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload.id).select('-passwordHash');
    if (!user) return res.status(401).json({ message: 'User not found' });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token invalid' });
  }
}

exports.isAdmin = (req, res, next) => {
  if (!req.user) return res.status(401).json({ message: 'Auth required' });
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admin only' });
  next();
}

exports.isDriver = (req, res, next) => {
  if (!req.user) return res.status(401).json({ message: 'Auth required' });
  if (req.user.role !== 'driver') return res.status(403).json({ message: 'Driver only' });
  next();
}
