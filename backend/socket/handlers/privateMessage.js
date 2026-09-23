const { createPrivateMessage } = require("../../Controllers/privateMessage");

const { emitToUser } = require("./socketUtils").default;

const privateMessage = (io, socket) => {
  socket.on("send_private_message", async (data) => {
    try {
      const { receiverId, content } = data;

      const senderId = socket.user.id;

      const message = await createPrivateMessage(senderId, receiverId, content);

      // Send message to sender
      socket.emit("private_message", message);

      // Send message to receiver
      emitToUser(io, receiverId, "private_message", message);

      console.log("Private message saved:", message._id);
    } catch (error) {
      console.error("Send private message error:", error);
    }
  });
};

module.exports = privateMessage;
