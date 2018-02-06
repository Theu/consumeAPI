import * as types from './actionTypes';

export function loadTodoStart() {
    return {
        type: types.LOAD_TODOS_START
    }
}
export function loadTodoSuccess(todos) {
    return {
        type: types.LOAD_TODOS_SUCCESS,
        todos: todos
    }
}

export function loadTodoFailed() {
    return {
        type: types.LOAD_TODOS_ERROR
    }
}
export function addTodo(todo) {
    console.log('01');
    return {
        type: types.ADD_TODO,
        todo
    }
}
export function removeTodo(todos) {
    console.log("remove", todos);
    return {
        type: types.DELETE_TODO
    }
}
