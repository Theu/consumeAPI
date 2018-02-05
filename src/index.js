import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import LogIn from './components/LogIn';


const store = configureStore();
render(
        <Provider store={store}>
                <BrowserRouter>
                        <div>
                                <Route exact path='/' component={LogIn} />
                                <Route exact path='/todo' component={App} />
                        </div>
                </BrowserRouter>
        </Provider>
, document.getElementById('root'));
