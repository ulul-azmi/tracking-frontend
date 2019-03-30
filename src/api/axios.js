import axios from 'axios';

export default axios.create({
  // baseURL: 'http://localhost:3001',
  // baseURL: 'http://35.240.131.134/',
  baseURL: process.env.REACT_APP_HOST,
});
