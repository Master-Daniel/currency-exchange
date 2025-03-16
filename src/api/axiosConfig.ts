import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';
import axiosRateLimit from 'axios-rate-limit';
// const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"; // Public Proxy
const API_BASE_URL = import.meta.env.VITE_EXCHANGE_API;

// Define the type for the response data you expect
interface ResponseData {
    message?: string;
    // Add other properties as per your response structure
}

const axiosInstance = axiosRateLimit(
    axios.create({
        baseURL: API_BASE_URL,
        withCredentials: false, // Ensure credentials are disabled
    }),
    { maxRPS: 5 }
);

// Request interceptor
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response: AxiosResponse<ResponseData>) => {
        return response;
    },
    (error: AxiosError<ResponseData>) => {
        const res = error.response?.data ?? { message: 'Something went wrong' };
        return Promise.reject(res);
    }
);

export default axiosInstance;
