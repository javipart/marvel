import { combineReducers } from "redux";

import topic from './topicReducer';
import search from './searchReducer';
import modals from './modalsReducer';

const reducers = {
  topic,
  search,
  modals,
};

const reducerMix = combineReducers(reducers);

export default reducerMix;
