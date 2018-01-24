import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import './index.css';
import ShowTodos from './ShowTodos';

import registerServiceWorker from './registerServiceWorker';


const store = configureStore();

render(
        <Provider store={store}>
                <ShowTodos />
        </Provider>, document.getElementById('root'));
registerServiceWorker();
