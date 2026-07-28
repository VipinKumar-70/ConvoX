require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/test", (req, res) => {
  res.json({
    message: "server is connected",
  });
});

// creating http server
const server = http.createServer(app);

// creating socket.io server
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true,
  },
});


// Import socket file
require("./socket/socket")(io);

// start server
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
