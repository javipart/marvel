import { ACTIONS, initialState } from '../models/constants';

export default (state = initialState.topic, action = {}) => {
  let maxPage;
  let get;
  switch (action.type) {
    case ACTIONS.TOPIC.SET_TOPIC:
      return { ...state, selected: action.value };
    case ACTIONS.TOPIC.LOADING:
      return { ...state, loading: action.value };
    case ACTIONS.TOPIC.SET_DATA_TOPIC:
      maxPage = parseInt(action.data.total / 20);
      return { ...state, data: action.data, maxPage };
    case ACTIONS.TOPIC.SET_TOPIC_PAGE:
      return { ...state, page: action.value };
    case ACTIONS.TOPIC.SET_GET_DATA:
      ({ get } = state);
      get.data = action.data;
      return { ...state, get };
    case ACTIONS.TOPIC.SET_DATA_DETAILS:
      ({ get } = state);
      get.details = action.data;
      return { ...state, get };
    case ACTIONS.TOPIC.SET_LOADING_DETAILS:
      ({ get } = state);
      get.loading = action.value;
      return { ...state, get };
    default:
      return state;
  }
};
