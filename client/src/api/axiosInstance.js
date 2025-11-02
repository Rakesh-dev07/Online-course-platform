import axios from "axios";

// Automatically switch between local and live backend
const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5000" // Local backend (for development)
      : "https://online-course-platform-dqnm.onrender.com", // Live Render backend
});

// Attach Authorization token to every request if available
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(sessionStorage.getItem("accessToken")) || "";
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default axiosInstance;
