import React from 'react';
import { render } from 'react-dom';
import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

const store = configureStore();
render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
