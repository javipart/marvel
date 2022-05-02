import { ACTIONS, initialState } from '../models/constants';

export default function modalsReducer(state = initialState.modals, action = {}) {
  if (action.type === ACTIONS.MODALS.TOGGLE) {
    return {
      show: action.modal.show,
      title: action.modal.title,
      Component: action.modal.Component,
      data: action.modal.data,
      dismissible: action.modal.dismissible,
    };
  }
  return state;
}