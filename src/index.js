import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';

import './assets/index.css';
import App from './components/app/App';
import rootReducer from './rootReducer';

let middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware = [logger];
}
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, ...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
