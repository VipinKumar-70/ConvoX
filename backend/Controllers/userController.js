const userModel = require("../Models/user");

const getUserProfile = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id).select("-password");

    if (!user)
      return res
        .status(401)
        .json({ success: false, message: "user not found" });

    return res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};

module.exports = { getUserProfile };
