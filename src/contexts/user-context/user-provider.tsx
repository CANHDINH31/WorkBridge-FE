'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import { paths } from '@/paths';
import { authService } from '@/lib/api';

import { signIn, signOut } from './actions';
import { reducer } from './reducer';
import { initialUser, IUserContextValue, IUserProviderProps, IUserType } from './types';

export const UserContext = React.createContext<IUserContextValue | undefined>(undefined);

export function UserProvider({ children }: IUserProviderProps): React.JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialUser);
  const router = useRouter();

  const handleSignInContext = async (payload: IUserType) => {
    await authService.setCookiesByNextServer(payload.accessToken!);
    localStorage.setItem('access_token', payload.accessToken!);
    localStorage.setItem('user', JSON.stringify(payload.user));
    if (payload.user) {
      //   router.replace(paths.dashboard.surveysResult);
      dispatch(signIn(payload.user, payload.accessToken));
    }
  };

  const handleSignOutContext = async () => {
    await authService.removeCookiesByNextServer();
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    dispatch(signOut());
    router.replace(paths.auth.signIn);
  };

  return (
    <UserContext.Provider value={{ ...state, handleSignInContext, handleSignOutContext }}>
      {children}
    </UserContext.Provider>
  );
}

export const UserConsumer = UserContext.Consumer;
