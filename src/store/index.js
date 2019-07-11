import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducers from './reducers';

const composeEnhancers = composeWithDevTools({});

export default createStore(reducers, /* preloadedState, */ composeEnhancers());
