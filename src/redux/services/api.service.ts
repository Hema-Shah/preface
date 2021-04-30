import axios, {AxiosInstance} from 'axios';
import {CONFIG} from '../../config';
export const client: AxiosInstance = axios.create({
  baseURL: CONFIG.domain,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
