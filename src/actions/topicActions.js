import { ACTIONS } from '../models/constants';
import { setSearch } from './searchActions';
import charactersApi from '../api/characters';
import comicsApi from '../api/comics';
import seriesApi from '../api/series';
import storiesApi from '../api/stories';

const setTopicSuccess = value => ({ type: ACTIONS.TOPIC.SET_TOPIC, value });
const setDataTopicSuccess = data => ({ type: ACTIONS.TOPIC.SET_DATA_TOPIC, data });
const setLoadingDataTopic = value => ({ type: ACTIONS.TOPIC.LOADING, value });
const setTopicPageSuccess = value => ({ type: ACTIONS.TOPIC.SET_TOPIC_PAGE, value });

const getData = (dispatch, topic, search) => {
  const { selected, page } = topic;
  const { value } = search;
  let apiToUse;
  switch (topics[selected]) {
    case 'characters':
      apiToUse = charactersApi;
      break;
    case 'comics':
      apiToUse = comicsApi;
      break;
    case 'series':
      apiToUse = seriesApi;
      break;
    default:
      apiToUse = storiesApi;
      break;
  }
  apiToUse.get(page, value).then(res => {
    const { data, status } = res;
    if (status !== 'Ok') {
      throw ('Error al consultar la API');
    }
    dispatch(setDataTopicSuccess(data));
    dispatch(setLoadingDataTopic(false));
  });
}

export const topics = {
  0: 'characters',
  1: 'comics',
  2: 'series',
  3: 'stories',
}

export function setTopic(value) {
  return (dispatch) => {
    dispatch(setTopicSuccess(value));
    dispatch(setTopicPageSuccess(1));
    dispatch(setSearch('', true));
  }
}

export function setTopicPage(value) {
  return (dispatch, getState) => {
    dispatch(setTopicPageSuccess(value));
    dispatch(setLoadingDataTopic(true));
    const state = getState();
    const { topic, search } = state;
    getData(dispatch, topic, search);
  }
}

export function getDataTopic() {
  return (dispatch, getState) => {
    try {
      dispatch(setLoadingDataTopic(true));
      const state = getState();
      const { topic, search } = state;
      getData(dispatch, topic, search);
    } catch (err) {
      dispatch(setLoadingDataTopic(false));
      console.log(err)
    }
  }
}