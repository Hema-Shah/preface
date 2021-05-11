import axios, {AxiosInstance} from 'axios';
import {CONFIG} from '../../config';

export const client: AxiosInstance = axios.create({
  baseURL: CONFIG.apiURL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export const event: AxiosInstance = axios.create({
  baseURL: CONFIG.eventbriteURL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
