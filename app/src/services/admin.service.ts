import axios from "axios";

const API_URL = "http://localhost:4000";

export const getDashboardStats = async () => {
  const response = await axios.get(`${API_URL}/admin/dashboard`);
  return response.data;
};
