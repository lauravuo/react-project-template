import { combineReducers } from 'redux';

import { BUTTON_PRESSED } from './actions';
import initialState from './initial-state';

const button = (state = initialState.button, action) => {
  switch (action.type) {
    case BUTTON_PRESSED:
      return { ...state, pressed: !state.pressed };
    default:
      return state;
  }
};

export default combineReducers({
  button
});
