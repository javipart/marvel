import { instance, apiGetData } from '.';
import { API_KEY, HASH, LIMIT, TIMES_STAMP } from '../models/constants';

export default class {
  static get(page) {
    const limit = LIMIT;
    const offset = (page - 1) * 20;
    const params = {
      limit,
      offset,
    }
    return instance.get(`stories`, { params }).then(apiGetData);
  }
}