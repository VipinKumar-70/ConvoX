const socketAuth = require("./socketAuth");

const socketConnection = (io) => {
  console.log("Socket.IO setup loaded");

  io.use(socketAuth);

  io.on("connection", (socket) => {
    console.log("User connected with Socket ID:", socket.id);
    console.log("User ID:", socket.user.id);

    socket.on("message", (message) => {
      console.log("Received message:", message);

      io.emit("message", message);
    });

    socket.on("disconnect", (reason) => {
      console.log(
        `User disconnected. Socket ID: ${socket.id}, Reason: ${reason}`,
      );
    });
  });
};

module.exports = socketConnection;
