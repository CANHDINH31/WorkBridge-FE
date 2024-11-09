import { IUser } from '@/types/user';

import { Action } from './types';

export const signIn = (user: IUser, accessToken: string | null): Action => ({
  type: 'SIGNIN',
  payload: { user, accessToken },
});

export const signOut = (): Action => ({
  type: 'SIGNOUT',
});
