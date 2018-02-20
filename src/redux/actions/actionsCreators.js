import {
    LOAD_TODOS_START,
    LOAD_TODOS,
    LOAD_TODOS_ERROR
} from './actionTypes';

import {
    consumeApi,
    axiosInstance
} from '../../tools/axiosBaseURL';

const {
    getTodosFromService
} = consumeApi(axiosInstance)

export const loadTodosStart = () => ({
    type: LOAD_TODOS_START
});

export const fetchTodos = (todosFetched) => ({
    type: LOAD_TODOS,
    payload: todosFetched
});

export const fetchTodosError = (error) => ({
    type: LOAD_TODOS_ERROR,
    payload: error
})

export function loadTodos(todos) {
    return dispatch => {
        dispatch(loadTodosStart());
        getTodosFromService()
        .then(response => {
            dispatch(fetchTodos(response.data));
        })
        .catch(error => {
            dispatch(fetchTodosError(error));
        })
    }
}
