import axios from "axios";

export const axiosInstance = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  axios.create({
    baseURL: `${baseURL}/api`,
    timeout: 1200,
  });
};
