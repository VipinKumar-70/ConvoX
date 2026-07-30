const socketConnection = (io) => {
  console.log("Socket.IO setup loaded");

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("message", (message) => {
      console.log("Message received:", message);

      io.emit("message", message);
    });
  });
};

module.exports = socketConnection;
