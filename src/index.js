import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

const Root = () => (
  <Provider store={store}>
    <div>test</div>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('app'));
