// utils/axiosInstance.js
import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api/",
  timeout: 10000,
});

// Add request interceptor to include Authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the API token from environment variables
    const token = process.env.NEXT_PUBLIC_API_TOKEN;

    // If the token exists, add it to the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const requestWithAbort = (url: string, options = {}) => {
  const controller = new AbortController();
  const config = { signal: controller.signal, ...options };

  // Axios request with abort support
  const request = axiosInstance.get(url, config);

  return { request, controller };
};

export default axiosInstance;
