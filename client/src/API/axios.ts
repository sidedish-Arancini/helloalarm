import axios from 'axios';

export const initAxiosConfig = () => {
  axios.defaults.baseURL = 'http://localhost:3000';
  axios.defaults.timeout = 3000;
};
