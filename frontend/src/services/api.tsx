import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000", // Flask backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Register user
export const registerUser = async (email: string, masterPass: string) => {
  const response = await API.post("/auth/register", { email, masterPass });
  return response.data;
};

// Login user
export const loginUser = async (email: string, masterPass: string) => {
  const response = await API.post("/auth/login", { email, masterPass });
  return response.data;
};