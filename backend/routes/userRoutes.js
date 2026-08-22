const express = require("express");
const router = express.Router();

const { getUserProfile, getAllUser } = require("../Controllers/userController");
const verifyToken = require("../Middlewares/authMiddleware");

router.get("/me", verifyToken, getUserProfile);

router.get("/all", verifyToken, getAllUser);

module.exports = router;
