import { combineReducers } from 'redux';

import { BUTTON_PRESSED } from './actions';
import initialState from './initial-state';

const buttonState = (state = initialState.buttonState, action) => {
  switch (action.type) {
    case BUTTON_PRESSED:
      return { ...state, pressed: true };
    default:
      return state;
  }
};

export default combineReducers({
  buttonState
});
