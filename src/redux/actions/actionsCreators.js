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
    getTodosFromServer,
    deleteTodoFromServer
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

export const deleteTodoStart = () => ({
    type: DELETE_TODO_START
})

export const deleteTodoSuccess = (todoToDeleteId) => ({
    type: DELETE_TODO_SUCCESS,
    payload: todoToDeleteId
});

export const deleteTodoError = (error) => ({
    type: DELETE_TODO_FAILURE,
    payload: error
})


export function deleteTodo(todoId) {
    return dispatch => {
        dispatch(deleteTodoStart());
        deleteTodoFromServer(todoId)
        .then(response => {
            dispatch(deleteTodoSuccess(todoId));
        })
        .catch(error => {
            dispatch(deleteTodoError())
        })
    }
}
