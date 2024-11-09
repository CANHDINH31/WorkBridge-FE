import { EUserRole } from './auth';

export interface IUser {
  id: number;
  name: string;
  role: EUserRole;
  user_name: string;
  email: string;
}
