import axios from 'axios';

const HttpClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
  },
});

export default HttpClient;
