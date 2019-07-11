import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from './reducers';

const composeEnhancers = composeWithDevTools({});
export const history = createBrowserHistory();

export default createStore(
  createRootReducer(history),
  /* preloadedState, */
  composeEnhancers(applyMiddleware(routerMiddleware(history)))
);
