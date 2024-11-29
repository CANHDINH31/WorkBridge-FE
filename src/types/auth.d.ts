export enum EUserRole {
  Admin = 'admin',
  User = 'teacher',
}

export interface ISignInParams {
  email: string;
  password: string;
}

export interface ISignUpParams {
  email: string;
  password: string;
  name: string;
  gender?: string;
  phone?: string;
  type?: string;
}

export interface ISignInResponse {
  user: IUserResponse;
  token: string;
}

export interface ISignUpResponse {
  message: string;
  status: number;
}

interface IUserResponse {
  id: number;
  name: string;
  email: string;
  role: EUserRole;
  user_name: string;
  created_at: string;
  updated_at: string;
}
