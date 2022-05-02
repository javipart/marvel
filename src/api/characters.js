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
      params.nameStartsWith = search;
    }
    return instance.get(`characters`, { params }).then(apiGetData);
  }
  
  static getDetails(id, variant) {
    return instance.get(`characters/${id}/${variant}`).then(apiGetData);
  }
}