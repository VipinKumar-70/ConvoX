const express = require("express");
const router = express.Router();

const { getPrivateMessage } = require("../Controllers/privateMessage");
const verifyToken = require("../Middlewares/authMiddleware");

router.get("/:userid", verifyToken, getPrivateMessage);

module.exports = router;
