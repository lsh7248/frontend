export interface ILogin {
  email: string;
  password: string;
}

export interface ILogout {
  access: string;
  refresh?: string;
}
