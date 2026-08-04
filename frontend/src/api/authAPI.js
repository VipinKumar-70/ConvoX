import api from "./api";

export const login = async (credentials) => {
  return api("/login", {
    meethod: "POST",
    body: JSON.stringify(credentials),
  });
};

export const register = async (userData) => {
  return api("/register", {
    meethod: "POST",
    body: JSON.stringify(userData),
  });
};

export const logout = async () => {
  return api("/logout", {
    meethod: "POST",
  });
};
