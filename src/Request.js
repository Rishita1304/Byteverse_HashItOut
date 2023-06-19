import axios from "axios";

export const publicRequest = axios.create({
    // baseURL: "http://localhost:4000/",
    baseURL: "https://updrivenbackend.onrender.com/api/",
  });

  export const resetPassword = axios.create({
    baseURL: "https://updriven.onrender.com",
  })