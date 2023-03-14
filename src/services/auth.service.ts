import axios from 'axios';
import authHeader from '@src/services/auth-header';
import { API_SERVER_V1, API_SERVICE } from '@src/services/config';
import { ILogin, ILogout } from '@src/types/Auth';

const apiAuth = axios.create({
  baseURL: API_SERVER_V1 + API_SERVICE.auth,
  headers: {
    ...authHeader(),
    'Content-Type': 'application/json',
  },
});

const login = async (params: ILogin) => {
  const response = await apiAuth.post<any>('/login', params);
  return response.data;
};

const logout = async (params: ILogout) => {
  const response = await apiAuth.post<any>('/logout', params);
  return response.data;
};

const AuthService = {
  login,
  logout,
};

export default AuthService;
