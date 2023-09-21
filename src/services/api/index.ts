import axios from "axios";
import { getHeaders } from "./constants";

export const Axios = axios.create({
  baseURL: "http://localhost:8098/api",
  timeout: 5000,
  headers: {
    ...getHeaders(),
  },
});

Axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);
