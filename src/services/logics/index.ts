import axios from 'axios';

export const AXIOS = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
