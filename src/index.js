import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadTodos } from './actions/todoActions';

import './index.css';
import ShowTodos from './ShowTodos';

import registerServiceWorker from './registerServiceWorker';


const store = configureStore();
store.dispatch(loadTodos());

render(
        <Provider store={store}>
                <ShowTodos />
        </Provider>, document.getElementById('root'));
registerServiceWorker();
