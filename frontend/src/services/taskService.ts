import axios from 'axios';

const API_URL = 'http://localhost:5001/tasks';
export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}
export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
export const fetchTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchTaskById = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createTask = async (task: { title: string; description: string }) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

export const updateTask = async (id: number, task: { title: string; description: string; status: string }) => {
  const response = await axios.put(`${API_URL}/${id}`, task);
  return response.data;
};

export const deleteTask = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
