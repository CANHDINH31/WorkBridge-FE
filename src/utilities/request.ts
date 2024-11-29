import Axios, { AxiosRequestConfig } from 'axios';

const baseURL = `${process.env.NEXT_PUBLIC_DOMAIN_API}/api`;

function authRequestInterceptor(config: AxiosRequestConfig) {
  const _token = localStorage.getItem('token');

  if (_token && _token !== 'undefined' && config.headers) {
    config.headers.authorization = _token;
  }

  return config;
}

export const request = Axios.create({
  baseURL,
});

//@ts-ignore
request.interceptors.request.use(authRequestInterceptor);
