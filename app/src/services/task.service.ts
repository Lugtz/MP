import axios from "axios";
import { Task } from "../models/Task";

const API_URL = "http://localhost:4000";

export const getTasks = async (userId: string) => {
  const response = await axios.get(`${API_URL}/tasks?userId=${userId}`);
  return response.data;
};

export const createTask = async (task: Task) => {
  const response = await axios.post(`${API_URL}/tasks`, task);
  return response.data;
};

export const updateTask = async (taskId: string, task: Partial<Task>) => {
  const response = await axios.put(`${API_URL}/tasks/${taskId}`, task);
  return response.data;
};

export const deleteTask = async (taskId: string) => {
  const response = await axios.delete(`${API_URL}/tasks/${taskId}`);
  return response.data;
};
