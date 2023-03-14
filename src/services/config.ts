import axios from 'axios';
import authHeader from './auth-header';

export const API_SERVER_V1 = 'http://localhost:8000/api/v1';
export const API_SERVICE = {
  auth: '/auth',
  user: '/users',
  board: '/boards',
};

const apiClient = axios.create({
  baseURL: API_SERVER_V1,
  headers: {
    ...authHeader(),
    'Content-Type': 'application/json',
  },
});

export default apiClient;
