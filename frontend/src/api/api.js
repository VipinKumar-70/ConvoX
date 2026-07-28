// BASE connection file
const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function api(endpoint, options = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    ...options,
  });

  if (!response.ok) {
    throw new Error("Request Failed.");
  }
  return response.json();
}
