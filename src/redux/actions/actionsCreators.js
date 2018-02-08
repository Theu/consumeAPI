import {
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_ERROR,
    ADD_TODO,
    ADD_TODO_SUCCESS,
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

export function addTodo(todo, todos) {
    return {
        type: ADD_TODO,
        todo,
        todos
    }
}

export function addTodoSuccess(todos) {
    return {
        type: ADD_TODO_SUCCESS,
        todos
    }
}