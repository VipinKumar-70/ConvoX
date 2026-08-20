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

const getAllUser = async (req, res) => {
  try {
    const userData = await userModel
      .find()
      .select("-password")
      .sort({ createdAt: 1 });
    return res.status(200).json({ success: true, userData });
  } catch (error) {
    res.status(500).json({ success: false, message: "failed to fetch Users." });
  }
};

module.exports = { getUserProfile, getAllUser };
