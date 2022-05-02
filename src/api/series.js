import { instance, apiGetData } from '.';
import { LIMIT } from '../models/constants';

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
    return instance.get(`series`, { params }).then(apiGetData);
  }

  static getDetails(id, variant) {
    return instance.get(`series/${id}/${variant}`).then(apiGetData);
  }
}
