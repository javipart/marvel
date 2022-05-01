import { instance, apiGetData } from '.';
import { API_KEY, HASH, LIMIT, TIMES_STAMP } from '../models/constants';

export default class {
  static get(page, search) {
    const limit = LIMIT;
    const offset = (page - 1) * 20;
    const params = {
      limit,
      offset,
    }
    if (search) {
      params.titleStartsWith = search;
    }
    return instance.get(`comics`, { params }).then(apiGetData);
  }
}