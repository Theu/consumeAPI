import {
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_ERROR,
    DELETE_TODO
} from './actionTypes';

export function loadTodoSuccess(todos) {
    return {
        type: LOAD_TODOS_SUCCESS,
        todos
    }
}

export function loadTodoError(response) {
    return {
        type: LOAD_TODOS_ERROR,
        response
    }
}
