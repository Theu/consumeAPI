import { BrowserRouter } from 'react-router-dom'

import {
    loadTodoSuccess,
    loadTodoError,
    addTodo,
    addTodoSuccess
} from './actionsCreators';

import {
    url,
    baseURL
} from '../../tools/axiosBaseURL';

const getFromServer = baseURL.get(url);
const GENERIC_NETWORK_ERROR = 'GENERIC_NETWORK_ERROR';

export function loadTodo() {
    console.log('loadtodo');
    return async (dispatch) => {
        try {
            dispatch(loadTodoSuccess(await getFromServer))
        } catch(error) {
            (!error.response) ?
                dispatch(loadTodoError(GENERIC_NETWORK_ERROR))
            :
                dispatch(loadTodoError(error.response.status))
        }
    }
}

export function addTodoToServer(todo, todos) {
    return async (dispatch) => {      
        try {
            await baseURL.post(url, todo)
            dispatch(addTodo(todo, todos))
        } catch(error) {
            console.log('ADD', error);
        }
    }
}

export function displayNewTodo(todos) {
    return async (dispatch) => {
        try {
            dispatch(addTodoSuccess(await getFromServer))
        } catch(error) {
            console.log('UPDATE ERROR', error);
        }
    }
}