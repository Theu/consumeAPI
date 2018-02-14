import {
    LOAD_TODOS_START,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_ERROR,

    ADD_TODO_START,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,

    DELETE_TODO
} from './actionTypes';

export function loadTodoStart() {
    return {
        type: LOAD_TODOS_START
    }
}

export function loadTodoSuccess(todos) {
    return {
        type: LOAD_TODOS_SUCCESS,
        todos
    }
}

export function loadTodoError(error) {
    return {
        type: LOAD_TODOS_ERROR,
        error
    }
}

export function addTodoStart(todo) {
    return {
        type: ADD_TODO_START,
        todo
    }
}

export function addTodoSuccess(todo) {
    return {
        type: ADD_TODO_SUCCESS,
        todo
    }
}

export function addTodoError(error) {
    return {
        type: ADD_TODO_ERROR,
        error
    }
}

export function deleteTodo(todos) {
    return {
        type: DELETE_TODO,
        todos
    }
}
