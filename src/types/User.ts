export interface IUser {
  id: number;
  name: string;
  email: string;
  age?: string;
  phone?: string;
}

export interface IUserCreate {
  name: string;
  password: string;
  email: string;
  age?: string;
  phone?: string;
}

export interface IUserUpdate {
  id: string;
  name?: string;
  password?: string;
  email?: string;
  age?: string;
  phone?: string;
}

export interface IUserResult {
  code: number;
  detail: string;
  error?: string;
}
