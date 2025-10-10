import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5050", // Flask backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Register user
export const registerUser = async (email: string, masterPass: string) => {
  try{
    const response = await API.post(`http://localhost:5050/auth/register`, { email, masterPass });
    return response.data;
  } catch(error: any) {
    if(error.response && error.response.status === 401){
      throw new Error("User already exists. Please login!");
    } else {
      throw new Error(error.response?.data?.error || "Registration failed.");
    }
  }
};

// Login user
export const loginUser = async (email: string, masterPass: string) => {
  const response = await API.post("http://localhost:5050/auth/login", { email, masterPass });
  return response.data;
};