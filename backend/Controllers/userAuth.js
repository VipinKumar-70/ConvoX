const userModel = require("../Models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const saltRounds = 10;
    const myPlainTextPassword = password;

    const exitsingUser = await userModel.findOne({ email });
    if (exitsingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exits." });
    }

    bcrypt.genSalt(saltRounds, async function (err, salt) {
      bcrypt.hash(myPlainTextPassword, salt, async function (err, hash) {
        const createUser = await userModel.create({
          username,
          email,
          password: hash,
        });
        console.log(createUser);
      });
      res.json({
        success: true,
        message: "User registered successfully.",
      });
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email and password" });
    }

    bcrypt.compare(password, user.password, function (err, result) {
      if (result) {
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
        res.cookie("userToken", token, {
          httpOnly: true,
          secure: false, // while deploying change its to true
          sameSite: "lax",
        });
        return res.status(200).json({
          success: true,
          message: "Login successfully.",
          user: {
            id: user._id,
            username: user.username,
            email: user.email,
          },
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("userToken");
    res.json({ message: "Logged out successfully." });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register, login, logout };
