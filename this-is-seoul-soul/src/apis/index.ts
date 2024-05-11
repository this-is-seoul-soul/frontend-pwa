/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios from 'axios';
// import { refreshTokenApi } from './userApi';
// import { debounce } from 'utils/debounce';

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

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    // if (err.response.status === 403) {
    //   const refresh = async () => {
    //     const res = await refreshTokenApi();
    //     if (res.status === 200) {
    //       axios.defaults.headers.common[`Authorization`] = res.data.data.accessToken;
    //       if (typeof window !== 'undefined') {
    //         localStorage.setItem('accessToken', res.data.data.accessToken);
    //       }
    //       console.log('갱신중');
    //     }
    //   };
    //   if (typeof window !== 'undefined') {
    //     const debounceFunction = debounce(refresh(), 1000);
    //     debounceFunction();
    //   }
    // }
    return err;
  }
);

export default axios;
