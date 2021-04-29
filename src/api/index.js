import axios from 'axios';

const defaultOptions = {
  baseURL: process.env.REACT_APP_BASE_API_URL,
};

const api = axios.create(defaultOptions);

export default api;
