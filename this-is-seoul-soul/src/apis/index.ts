/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios from 'axios';

const axios = Axios.create({
  baseURL: `/api`,
  withCredentials: true,
});

axios.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        config.headers['Authorization'] = `${accessToken}`;
      }
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axios;
