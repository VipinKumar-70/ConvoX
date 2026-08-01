const userModel = require("../Models/user");
const jwt = require("jsonwebtoken");
const brcypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { username, email, password } = body.req;
    const saltRound = 10;
    const myPlainTextPassword = password;

    const exitsingUser = await userModel.findOne({ email });
    if (exitsingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exits." });
    }

    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
        const createUser = await userModel.create({
            username,
            email,
            password:hash,
        })
        console.log(createUser);
        
      });
      res.json({
        success:true,
        message:"User registered successfully."
      })
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async () => {};

const logout = async () => {};

module.exports = { register, login, logout };
