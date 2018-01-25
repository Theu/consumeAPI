import * as types from './actionTypes';

export function loadTodoStart() {
    return {
        type: types.LOAD_TODOS_START
    }
}
export function loadTodoSuccess(todos) {
    console.log('loader', todos.data);
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
    return {
        type: types.ADD_TODO,
        todo
    }
}
export function removeTodo(todo) {
    return {
        type: types.DELETE_TODO
    }
}
