const socketAuth = require("./socketAuth");

const privateMessage = require("./handlers/privateMessage");

const { addOnlineUser, removeOnlineUser, getOnlineUsers } =
  require("./handlers/socketUtils").default;

const socketConnection = (io) => {
  console.log("Socket.IO setup loaded");

  io.use(socketAuth);

  io.on("connection", (socket) => {
    const userId = socket.user.id;

    console.log("User connected:", socket.id);
    console.log("User ID:", userId);

    addOnlineUser(userId, socket.id);

    io.emit("onlineUsers", getOnlineUsers());

    privateMessage(io, socket);

    socket.on("disconnect", (reason) => {
      console.log(
        `User disconnected. Socket ID: ${socket.id}, Reason: ${reason}`,
      );

      removeOnlineUser(userId, socket.id);

      io.emit("onlineUsers", getOnlineUsers());
    });
  });
};

module.exports = socketConnection;
