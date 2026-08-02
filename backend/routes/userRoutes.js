const express = require("express");
const router = express.Router();

const { register, logout, login } = require("../Controllers/userAuth");

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

module.exports = router;
