const socketConnection = (io) => {
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

export default socketConnection;
