const express = require("express");
const router = express.Router();

const { getUserProfile } = require("../Controllers/userController");
const verifyToken = require("../Middlewares/authMiddleware");

router.get("/me", verifyToken, getUserProfile);

module.exports = router;
