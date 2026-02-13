export interface User {
  id: number;
  email: string;
  name: string;
}

export interface RegisterUser {
  email: string;
  password: string;
  name: string;
}

export interface LoginUser {
  email: string;
  password: string;
}
