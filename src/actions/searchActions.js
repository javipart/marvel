import { ACTIONS } from '../models/constants';
import charactersApi from '../api/characters';
import comicsApi from '../api/comics';
import seriesApi from '../api/series';
import storiesApi from '../api/stories';
import { getDataTopic } from './topicActions';

const setSearchSuccess = value => ({ type: ACTIONS.SEARCH.SET_SEARCH, value });

export function setSearch(value, changeTopic = false) {
  return (dispatch, getState) => {
    try {
      dispatch(setSearchSuccess(value));
      if (!changeTopic) {
        dispatch(getDataTopic());
      }
    } catch (err) {
      console.log(err)
    }
  }
}