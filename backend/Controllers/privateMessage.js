const privateMessageModel = require("../Models/PrivateMessage");

const createPrivateMessage = async (senderId, receiverId, content) => {
  try {
    const message = await privateMessageModel.create({
      sender: senderId,
      receiver: receiverId,
      content: content,
    });

    return message;
  } catch (error) {
    console.log("Failed to save private message:", error);
    throw error;
  }
};

const getPrivateMessage = async (req, res) => {
  try {
    const currentUserId = req.user.id;
    const otherUserId = req.params.userid;

    const messages = await privateMessageModel
      .find({
        $or: [
          {
            sender: currentUserId,
            receiver: otherUserId,
          },
          {
            receiver: currentUserId,
            sender: otherUserId,
          },
        ],
      })
      .sort({ createdAt: 1 });

    return res.status(200).json({
      success: true,
      messages,
    });
  } catch (error) {
    console.log("Get Private message error:", error);

    return res
      .status(500)
      .json({ success: false, message: "failed to fetch message." });
  }
};

module.exports = { createPrivateMessage, getPrivateMessage };
