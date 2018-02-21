import {
    LOAD_TODOS_START,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,

    DELETE_TODO_START,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_FAILURE
} from './actionTypes';

import {
    consumeApi,
    axiosInstance
} from '../../tools/serverRequests';

const {
    getTodosFromServer
} = consumeApi(axiosInstance)

export const loadTodosStart = () => ({
    type: LOAD_TODOS_START
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
        dispatch(loadTodosStart());
        getTodosFromServer()
        .then(response => {
            dispatch(loadTodosSuccess(response.data));
        })
        .catch(error => {
            dispatch(loadTodosError(error));
        })
    }
}
