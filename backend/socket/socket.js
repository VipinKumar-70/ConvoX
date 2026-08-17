const socketConnection = (io) => {
  console.log("Socket.IO setup loaded");

  io.on("connection", (socket) => {
    console.log("User connected with Socket ID:", socket.id);

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
