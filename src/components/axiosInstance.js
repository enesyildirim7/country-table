import axios from "axios";

const URL = "https://restcountries.com/v2/all";

const axiosInstance = axios.create({
  baseURL: URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
