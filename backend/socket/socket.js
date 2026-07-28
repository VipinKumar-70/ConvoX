const socketConnection = (io) => {
  console.log("Socket.IO setup loaded");

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("message", (message) => {
      console.log("Message:", message);

      io.emit("message", message);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};

module.exports = socketConnection;
