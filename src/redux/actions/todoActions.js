import {
    loadTodoStart,
    loadTodoSuccess,
    loadTodoError,

    addTodoStart,
    addTodoSuccess,
    addTodoError,

    deleteTodoStart,
    deleteTodoSuccess,
    deleteTodoError
} from './actionsCreators';

import {consumeApi} from '../../tools/axiosBaseURL'




import {
    url,
    axiosInstance // remeber to change this axiosIstance?
} from '../../tools/axiosBaseURL';

const {
    getTodoFromServer,
    postTodo,
    removeTodo
} = consumeApi(axiosInstance)

export function todo_load_start() {
    return async dispatch => {
        try {
            dispatch(loadTodoStart())
        } catch (error) {
            dispatch(todo_load_error(error))
        }
    }
}

export function todo_load() {
    return async dispatch => {
        try {
            dispatch(loadTodoStart())
            dispatch(loadTodoSuccess(await getTodoFromServer()))
        } catch(error) {
            dispatch(todo_load_error(error))
        }
    }
}

export function todo_load_error(error) {
    return dispatch => {
        dispatch(loadTodoError(error))
    }
}

/// TODO_ADD
export function todo_add_start(todoTitle) {
    return async dispatch => {
        try {
            dispatch(addTodoStart(todoTitle))
            await postTodo(todoTitle)
            dispatch(todo_add_success(todoTitle))
        } catch (error) {
            dispatch(todo_add_error(error))
        }
    }
}

export function todo_add_error(error) {
    return dispatch => {
        dispatch(addTodoError(error))
    }
}




export function todo_add_success(todoTitle) {
    return dispatch => {
        try {
            dispatch(addTodoSuccess(todoTitle))
            dispatch(todo_load())
        } catch(error) {
            dispatch(todo_add_error(error))
        }
    }
}


/// TODO_DELETE
export function todo_delete_start(todoId) {
    return async dispatch => {
        try {
            dispatch(deleteTodoStart(todoId))
            await removeTodo(todoId)
            dispatch(todo_delete_success(todoId))
        } catch(error) {
            dispatch(todo_delete_error(error))
        }
    }
}

export function todo_delete_success(todoId) {
    return async dispatch => {
        try {           
            dispatch(loadTodoSuccess(await getTodoFromServer()))
        } catch (error) {
            dispatch(todo_delete_error(error))
        }
    }
}

export function todo_delete_error(error) {
    return dispatch => {
        dispatch(deleteTodoError(error))
    }
}