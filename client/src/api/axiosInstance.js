import axios from "axios";

// Automatically detect whether running locally or on live (Render)
const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:1000" // Local backend (same port as server.js)
      : "https://online-course-platform-dqnm.onrender.com", // Live Render backend
});

// Automatically attach JWT token if present
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${JSON.parse(accessToken)}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
