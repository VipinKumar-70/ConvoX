import api from "./api";

export const loginUser = async (credentials) => {
  return api("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
};

export const registerUser = async (userData) => {
  return api("/auth/register", {
    method: "POST",
    body: JSON.stringify(userData),
  });
};

export const logoutUser = async () => {
  return api("/auth/logout", {
    method: "POST",
  });
};

export const getCurrentUser = async () => {
  return api("/user/me", {
    method: "GET",
  });
};
