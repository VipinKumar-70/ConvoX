import api from "./api";

export const getCurrentUser = async () => {
  return api("/user/me", {
    method: "GET",
  });
};

export const getAllUser = async () => {
  return api("/user/all", {
    method: "GET",
  });
};
