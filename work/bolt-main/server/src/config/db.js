const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

// Load .env explicitly from server root
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in .env");
    }

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected");
  } catch (err) {
    console.error("DB Error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
