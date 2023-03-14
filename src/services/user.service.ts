import axios from 'axios';
import authHeader from '@src/services/auth-header';
import { API_SERVER_V1, API_SERVICE } from '@src/services/config';
import type {
  IUser,
  IUserCreate,
  IUserUpdate,
  IUserResult,
} from '@src/types/User';

const apiUser = axios.create({
  baseURL: API_SERVER_V1 + API_SERVICE.user,
  headers: {
    ...authHeader(),
    'Content-Type': 'application/json',
  },
});

const findUsers = async () => {
  const response = await apiUser.get<IUser[]>('');
  return response.data;
};

const findUserById = async (id: number) => {
  const response = await apiUser.get<IUser>(`/${id}`);
  return response.data;
};

const findUserByName = async (name: string) => {
  const response = await apiUser.get<IUser>(`?name=${name}`);
  return response.data;
};

const createUser = async (params: IUserCreate) => {
  const response = await apiUser.post<any>('', params);
  return response.data;
};

const updateUserById = async (id: number, params: IUserUpdate) => {
  const response = await apiUser.put<any>(`/${id}`, params);
  return response.data;
};

const deleteUserById = async (id: number) => {
  const response = await apiUser.delete<any>(`/${id}`);
  return response.data;
};

const deleteUsers = async () => {
  const response = await apiUser.delete<any>('');
  return response.data;
};

const UserService = {
  findUsers,
  findUserById,
  findUserByName,
  createUser,
  updateUserById,
  deleteUserById,
  deleteUsers,
};

export default UserService;
