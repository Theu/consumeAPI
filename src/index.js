import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import ShowTodos from './ShowTodos';
import {todosReducer} from './reducers/reducer';

import registerServiceWorker from './registerServiceWorker';
import { fetchTodo } from './actions/index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
        <Provider store={createStoreWithMiddleware(todosReducer)}>
                <ShowTodos />
        </Provider>, document.getElementById('root'));
registerServiceWorker();
