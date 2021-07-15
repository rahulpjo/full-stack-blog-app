import axios from "axios";
let apiUrl;

const apiUrls = {
  production: "https://sour-full-stack-blog.herokuapp.com/api",
  development: "http://localhost:3000/api",
};

apiUrl = apiUrls.production;

const api = axios.create({ baseURL: apiUrl });

export default api;
