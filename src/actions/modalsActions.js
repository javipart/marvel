import { ACTIONS, initialState } from '../models/constants';

const toggleModalSuccess = modal => ({ type: ACTIONS.MODALS.TOGGLE, modal });

export function showModal(title, Component, data = {}) {
  return (dispatch) => {
    const response = {
      show: true,
      title,
      Component,
      data,
    };
    dispatch(toggleModalSuccess(response));
  };
}

export function hideModal() {
  return (dispatch) => {
    dispatch(toggleModalSuccess(initialState.modals));
  };
}