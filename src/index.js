import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import LogIn from './components/LogIn';

const store = configureStore();
render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
  