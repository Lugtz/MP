import axios from "axios";

const API_URL = "http://localhost:4000";

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data;
};

export const registerUser = async (name: string, email: string, password: string, role: string) => {
  const response = await axios.post(`${API_URL}/auth/register`, { name, email, password, role });
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data;
};
