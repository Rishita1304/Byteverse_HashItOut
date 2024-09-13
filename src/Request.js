import axios from "axios";

export const publicRequest = axios.create({
    // baseURL: "http://localhost:8002/api/",
    baseURL: "https://updrivenbackend.onrender.com/api/",
  });
