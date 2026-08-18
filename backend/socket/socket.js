const socketAuth = require("./socketAuth");

const socketConnection = (io) => {
  console.log("Socket.IO setup loaded");

  // Socket authentication
  io.use(socketAuth);

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    console.log("User ID:", socket.user.id);

    socket.on("message", (message) => {
      console.log("Message received:", message);

      io.emit("message", message);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);

      console.log("User ID:", socket.user.id);
    });
  });
};

module.exports = socketConnection;
