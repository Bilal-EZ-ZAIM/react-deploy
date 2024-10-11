import axios from "axios";

export const custumAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

// Request interceptor
custumAxios.interceptors.request.use(
  (request) => {
    request.headers.Authorization = "Bearer token"; // Corrected typo
    console.log("Request sent:", request);
    return request;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
custumAxios.interceptors.response.use(
  (response) => {
    console.log("Response received:", response);
    return response;
  },
  (error) => {
    console.error("Response error:", error);
    return Promise.reject(error);
  }
);
