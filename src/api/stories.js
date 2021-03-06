import { instance, apiGetData } from '.';
import { LIMIT } from '../models/constants';

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

  static getDetails(id, variant) {
    return instance.get(`stories/${id}/${variant}`).then(apiGetData);
  }
}
