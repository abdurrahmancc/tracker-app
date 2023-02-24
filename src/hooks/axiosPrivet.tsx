import axios from "axios";
import Cookies from "js-cookie";
import { accessTokenName } from "./useCookies";

export const baseURL = `http://localhost:5000`;

const axiosPrivet = axios.create({
  withCredentials: true,
  baseURL: `${baseURL}/api/v1`,
});
axiosPrivet.interceptors.request.use(
  function (config: any) {
    if (!config.headers.authorization) {
      config.headers.authorization = `Bearer ${Cookies.get(accessTokenName)}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosPrivet.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Do something with response error
    if (error?.response?.status === 403) {
      //
    }
    return Promise.reject(error);
  }
);

export default axiosPrivet;
