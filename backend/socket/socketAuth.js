const jwt = require("jsonwebtoken");
const cookie = require("cookie");

const socketAuth = (socket, next) => {
  try {
    const cookieHeader = socket.handshake.headers.cookie;

    if (!cookieHeader) {
      return next(new Error("Authentication required"));
    }

    const cookies = cookie.parse(cookieHeader);
    const token = cookies.userToken;

    if (!token) {
      return next(new Error("JWT token not found"));
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // Store authenticated user information on the socket
    socket.user = decoded;

    next();
  } catch (error) {
    console.error("Socket authentication failed:", error.message);
    next(new Error("Invalid or expired token"));
  }
};

module.exports = socketAuth;
