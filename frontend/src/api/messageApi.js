import api from "./api";

export const getPrivateMessage = async (userId) => {
  return api(`/message/${userId}`);
};
