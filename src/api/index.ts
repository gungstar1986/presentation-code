import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const URL = process.env.REACT_APP_FETCH_URL;

export const instance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const onFullFilled = (config: AxiosRequestConfig) => {
  return config;
};

const responseError = (error: AxiosError) => {
  throw error;
};

// do actions before request
instance.interceptors.request.use(onFullFilled);

// do actions after response
instance.interceptors.response.use((response) => response, responseError);
