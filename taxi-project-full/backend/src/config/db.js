const mongoose = require('mongoose');

const connectDB = async (uri) => {
  await mongoose.connect(uri, { dbName: 'vsr_taxi' });
  console.log('MongoDB connected');
}

module.exports = connectDB;
