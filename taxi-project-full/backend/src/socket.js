const { Server } = require("socket.io");

let io;

module.exports = {
  init: (server) => {
    io = new Server(server, {
      cors: {
        origin: "*",         // allow frontend
        methods: ["GET", "POST"],
      },
      transports: ["websocket", "polling"], // FIX
    });

    io.on("connection", (socket) => {
      console.log("socket connected:", socket.id);

      // Join booking room
      socket.on("join-booking", ({ bookingId }) => {
        socket.join(bookingId);
      });

      // Send driver live location
      socket.on("driver-location", ({ bookingId, location }) => {
        io.to(bookingId).emit("driver-location", { bookingId, location });
      });
    });

    return io;
  },

  getIo: () => io,
};
