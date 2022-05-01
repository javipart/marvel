import { ACTIONS, initialState } from '../models/constants';

export default (state = initialState.search, action = {}) => {
  switch (action.type) {
    case ACTIONS.SEARCH.SET_SEARCH:
      return { ...state, value: action.value };
    default:
      return state;
  }
};
