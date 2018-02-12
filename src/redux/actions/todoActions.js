import {
    loadTodoSuccess,
    loadTodoError
} from './actionsCreators';

import {
    url,
    baseURL
} from '../../tools/axiosBaseURL';

const getFromServer = baseURL.get(url);
const GENERIC_NETWORK_ERROR = 'GENERIC_NETWORK_ERROR';

export function todo_load() {
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

export function todo_add_ToServer(todo) {
    return async (dispatch, getState) => {
        try {
            const postTodo = await baseURL.post(url, todo)
            if(postTodo.statusText === 'Created') {
                dispatch(loadTodoSuccess(await baseURL.get(url)))
            }
        } catch(error) {
            (!error.response) ?
                dispatch(loadTodoError(GENERIC_NETWORK_ERROR))
            :
                dispatch(loadTodoError(error.response.status))
        }
    }
}
