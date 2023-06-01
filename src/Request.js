import axios from "axios";

export const publicRequest = axios.create({
    baseURL: "https://carpooling-1sqz.onrender.com/",
  });