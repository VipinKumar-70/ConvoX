const onlineUsers = new Map();

const addOnlineUser = (userId, socketId) => {
  if (!onlineUsers.has(userId)) {
    onlineUsers.set(userId, new Set());
  }

  onlineUsers.get(userId).add(socketId);
};

const removeOnlineUser = (userId, socketId) => {
  const userSockets = onlineUsers.get(userId);

  if (!userSockets) {
    return;
  }

  userSockets.delete(socketId);

  if (userSockets.size === 0) {
    onlineUsers.delete(userId);
  }
};

// Get all online users
const getOnlineUsers = () => {
  return Array.from(onlineUsers.keys());
};

// Get all sockets of a user
const getUserSockets = (userId) => {
  return onlineUsers.get(userId) || new Set();
};

// Send event to all sockets of a particular user
const emitToUser = (io, userId, event, data) => {
  const userSockets = getUserSockets(userId);

  userSockets.forEach((socketId) => {
    io.to(socketId).emit(event, data);
  });
};

export default {
  addOnlineUser,
  removeOnlineUser,
  getOnlineUsers,
  getUserSockets,
  emitToUser,
};
