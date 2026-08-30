const socketAuth = require("./socketAuth");

const onlineUsers = new Map();

const socketConnection = (io) => {
  console.log("Socket.IO setup loaded");

  io.use(socketAuth);

  io.on("connection", (socket) => {
    const userId = socket.user.id;

    console.log("User connected with Socket ID:", socket.id);
    console.log("User ID:", socket.user.id);

    // Send updated online users
    if (!onlineUsers.has(userId)) {
      onlineUsers.set(userId, new Set());
    }
    // Add this socket to user's sockets
    onlineUsers.get(userId).add(socket.id);

    console.log("Online users:", Array.from(onlineUsers.keys()));

    // Send online users to all clients
    io.emit("onlineUsers", Array.from(onlineUsers.keys()));

    socket.on("message", (message) => {
      console.log("Received message:", message);

      const newMessage = {
        id: Date.now(),
        text: message,
        senderId: socket.user.id,
        createdAt: new Date().toISOString(),
      };

      io.emit("message", newMessage);
    });

    socket.on("disconnect", (reason) => {
      console.log(
        `User disconnected. Socket ID: ${socket.id}, Reason: ${reason}`,
      );

      const userSockets = onlineUsers.get(userId);
      if (userSockets) {
        // Remove disconnected socket
        userSockets.delete(socket.id);

        // If user has no other connected sockets
        if (userSockets.size === 0) {
          onlineUsers.delete(userId);
        }
      }
      console.log("Online users:", Array.from(onlineUsers.keys()));
      
      // Send updated online users
      io.emit("onlineUsers", Array.from(onlineUsers.keys()));
    });
  });
};

module.exports = socketConnection;
