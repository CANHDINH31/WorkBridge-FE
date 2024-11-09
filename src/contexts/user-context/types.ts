import type { IUser } from '@/types/user';

export interface IUserContextValue {
  user: IUser | null;
  accessToken: string | null;
  handleSignOutContext: () => void;
  handleSignInContext: (payload: IUserType) => void;
}

export interface IUserType {
  user: IUser | null;
  accessToken: string | null;
}

export type Action =
  | {
      type: 'SIGNIN';
      payload: {
        user: IUser;
        accessToken: string | null;
      };
    }
  | { type: 'SIGNOUT' };

export const initialUser: IUserType = {
  user: null,
  accessToken: null,
};

export interface IUserProviderProps {
  children: React.ReactNode;
}
