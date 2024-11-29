import { request } from './request';

export const setToken = (accessToken: string | null) => {
  if (accessToken) {
    window.localStorage.setItem('token', accessToken);
    request.defaults.headers.common.authorization = `Bearer ${accessToken}`;
  } else {
    window.localStorage.removeItem('token');
    delete request.defaults.headers.common.authorization;
  }
};

export const clearToken = () => {
  setToken('');
};
