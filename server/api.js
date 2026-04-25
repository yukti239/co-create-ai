import axios from "axios";

const API = axios.create({
  baseURL: "https://co-create-ai.onrender.com/api",
});

export default API;