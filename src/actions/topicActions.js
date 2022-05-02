import { ACTIONS } from '../models/constants';
import { setSearch } from './searchActions';
import charactersApi from '../api/characters';
import comicsApi from '../api/comics';
import seriesApi from '../api/series';
import storiesApi from '../api/stories';
import { showModal } from './modalsActions';
import Details from '../components/Modal/Details';

const setTopicSuccess = value => ({ type: ACTIONS.TOPIC.SET_TOPIC, value });
const setDataTopicSuccess = data => ({ type: ACTIONS.TOPIC.SET_DATA_TOPIC, data });
const setLoadingDataTopic = value => ({ type: ACTIONS.TOPIC.LOADING, value });
const setTopicPageSuccess = value => ({ type: ACTIONS.TOPIC.SET_TOPIC_PAGE, value });
const setGetDataSuccess = data => ({ type: ACTIONS.TOPIC.SET_GET_DATA, data });
const setGetDataDetailsSuccess = data => ({ type: ACTIONS.TOPIC.SET_DATA_DETAILS, data });

const getApiToUse = (selected) => {
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
  return apiToUse;
};

const getData = (dispatch, topic, search) => {
  const { selected, page } = topic;
  const { value } = search;
  const apiToUse = getApiToUse(selected);
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
};

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

export function showDataDetails(data) {
  return (dispatch, getState) => {
    const state = getState();
    const { topic } = state;
    dispatch(setGetDataSuccess(data));
    const newData = { ...data, topic: topic.selected };
    console.log(newData)
    dispatch(showModal(data.name || data.tittle, Details, newData));
  }
}

export function getDataDetails(variant) {
  return (dispatch, getState) => {
    try {
      const state = getState();
      const { topic } = state;
      const { get } = topic;
      const { id } = get.data;
      charactersApi.getDetails(id, variant).then(res => {
        dispatch(setGetDataDetailsSuccess(res.data.results));
      });
    } catch (error) {

    }
  }
}