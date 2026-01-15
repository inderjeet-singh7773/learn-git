require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const connectDB = require("./config/db");
const socketInit = require("./socket");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// AUTH ROUTES
app.use("/api/auth", require("./routes/auth"));

// OTHER ROUTES (if any)
// app.use("/api/booking", require("./routes/booking"));
// app.use("/api/user", require("./routes/user"));

app.get("/", (req, res) => {
  res.send("Taxi backend running...");
});

// Start server
const server = http.createServer(app);

const io = socketInit.init(server);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
