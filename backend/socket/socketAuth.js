const jwt = require("jsonwebtoken");

const socketAuth = (socket, next) => {
  try {
    const cookieHeader = socket.handshake.headers.cookie;

    console.log("Cookie:", cookieHeader);

    if (!cookieHeader) {
      return next(new Error("Authentication required"));
    }

    const cookies = {};

    cookieHeader.split(";").forEach((cookie) => {
      const [key, value] = cookie.trim().split("=");

      cookies[key] = value;
    });

    const token = cookies.userToken;

    console.log("Token:", token);

    if (!token) {
      return next(new Error("Token not found"));
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    console.log("Decoded user:", decoded);

    socket.user = decoded;

    next();
  } catch (error) {
    console.log("Socket authentication error:", error.message);

    next(new Error("Invalid token"));
  }
};

module.exports = socketAuth;
