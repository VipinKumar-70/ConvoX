require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

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

const RunServer = async () => {
  try {
    app.listen(3000, () => {
      console.log("server is running...");
    });
  } catch (error) {
    console.error("Server failed to start", error);
  }
};

RunServer();
