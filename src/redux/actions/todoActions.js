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

export function addTodoToServer(todo) {
    return async (dispatch, getState) => {      
        try {
            dispatch(addTodo(todo))
            await baseURL.post(url, todo)
            if(getState().response === '200') {
                dispatch(loadTodoSuccess(await baseURL.get(url)))
            }
        } catch(error) {
            console.log('ADD', error);
        }
    }
}
