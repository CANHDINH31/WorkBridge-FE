import Axios, { AxiosRequestConfig } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_DOMAIN_API;

const authRequestInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig<any> => {
  const _token = localStorage.getItem('access_token');

  if (_token && _token !== 'undefined' && config.headers) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${_token}`,
    };
  }

  return config;
};

export const request = Axios.create({
  baseURL,
});

//@ts-ignore
request.interceptors.request.use(authRequestInterceptor);
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error?.response?.data);
  }
);
