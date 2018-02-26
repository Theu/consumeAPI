import {
    LOAD_TODOS_START,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,

    ADD_TODO_START,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE
} from './actionTypes';

import {
    consumeApi,
    axiosInstance
} from '../../tools/serverRequests';

const {
    getTodosFromServer,
    postTodoToServer
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

export const addTodoStart = () => ({
    type: ADD_TODO_START
})

export const addTodoSuccess = (todoToBeAdded) => ({
    type: ADD_TODO_SUCCESS,
    payload: todoToBeAdded
})

export const addTodoError = (error) => ({
    type: ADD_TODO_FAILURE,
    payload: error
})

export function addTodo(todo) {
    return dispatch => {
        dispatch(addTodoStart());
        postTodoToServer(todo)
        .then(response => {
            dispatch(addTodoSuccess(response.config.data))
            dispatch(loadTodos())
        })
        .catch(error => {
            dispatch(addTodoError(error))
        })
    }
}
