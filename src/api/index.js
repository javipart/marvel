import axios from 'axios';
import { SERVER, API_KEY, HASH, TIMES_STAMP } from '../models/constants';

export const instance = axios.create({
  baseURL: SERVER,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    apikey: API_KEY,
    hash: HASH,
    ts: TIMES_STAMP,
  },
});

export const apiGetData = response => response.data;

export default instance;
