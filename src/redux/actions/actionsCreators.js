import {
    LOAD_TODOS_REQUEST,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE
} from './actionTypes';

import {
    consumeApi,
    axiosInstance
} from '../../tools/serverRequests';

const {
    getTodosFromServer
} = consumeApi(axiosInstance)

export const loadTodosRequest = () => ({
    type: LOAD_TODOS_REQUEST
});

export const loadTodosSuccess = (todosRequested) => ({
    type: LOAD_TODOS_SUCCESS,
    payload: todosRequested
});

export const loadTodosError = (error) => ({
    type: LOAD_TODOS_FAILURE,
    payload: error
})

export function loadTodos(todos) {
    return dispatch => {
        dispatch(loadTodosRequest());
        getTodosFromServer()
        .then(response => {
            dispatch(loadTodosSuccess(response.data));
        })
        .catch(error => {
            dispatch(loadTodosError(error));
        })
    }
}
