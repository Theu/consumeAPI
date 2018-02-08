import { BrowserRouter } from 'react-router-dom'

import {
    loadTodoSuccess,
    loadTodoError,
    addTodo
} from './actionsCreators';

import {
    url,
    baseURL
} from '../../tools/axiosBaseURL';

const getFromServer = baseURL.get(url);
const GENERIC_NETWORK_ERROR = 'GENERIC_NETWORK_ERROR';

export function loadTodo() {
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

export function addedTodo(todo) {
    return async (dispatch) => {
        try {
            const postTodo = await baseURL.post(url, todo)
            if(postTodo.status === 201) {
                dispatch(addTodo(todo))
                dispatch(loadTodoSuccess(await getFromServer))
            }

            // dispatch(loadTodoSuccess(await getFromServer))
        } catch(error) {
            console.log('ADD', error);
        }
    }
}
