import { combineReducers } from "redux";

import topic from './topicReducer';
import search from './searchReducer';

const reducers = {
  topic,
  search,
};

const reducerMix = combineReducers(reducers);

export default reducerMix;
