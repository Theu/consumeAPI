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

import {
    consumeApi,
    axiosInstance
} from '../../tools/axiosBaseURL';

const {
    getTodoFromServer,
    postTodo,
    removeTodo
} = consumeApi(axiosInstance)

export function todoLoadStart() {
    return dispatch => {
        try {
            dispatch(loadTodoStart())
        } catch (error) {
            dispatch(todoLoadError(error))
        }
    }
}

export function todoLoadSuccess() {
    return async dispatch => {
        try {
            dispatch(loadTodoStart())
            dispatch(loadTodoSuccess(await getTodoFromServer()))
        } catch(error) {
            dispatch(todoLoadError(error))
        }
    }
}

export function todoLoadError(error) {
    return dispatch => {
        dispatch(loadTodoError(error))
    }
}


export function todoAddStart(todoTitle) {
    return async dispatch => {
        try {
            dispatch(addTodoStart(todoTitle))
            await postTodo(todoTitle)
            dispatch(todoAddSuccess(todoTitle))
        } catch (error) {
            dispatch(todoAddError(error))
        }
    }
}

export function todoAddError(error) {
    return dispatch => {
        dispatch(addTodoError(error))
    }
}

export function todoAddSuccess(todoTitle) {
    return dispatch => {
        try {
            dispatch(addTodoSuccess(todoTitle))
            dispatch(todoLoadSuccess())
        } catch(error) {
            dispatch(todoAddError(error))
        }
    }
}


export function todoDeleteStart(todoId) {
    return async dispatch => {
        try {
            dispatch(deleteTodoStart(todoId))
            await removeTodo(todoId)
            dispatch(todoDeleteSuccess(todoId))
        } catch(error) {
            dispatch(todoDeleteError(error))
        }
    }
}

export function todoDeleteSuccess(todoId) {
    return async dispatch => {
        try {
            dispatch(deleteTodoSuccess(todoId))
            dispatch(loadTodoSuccess(await getTodoFromServer()))
        } catch (error) {
            dispatch(todoDeleteError(error))
        }
    }
}

export function todoDeleteError(error) {
    return dispatch => {
        dispatch(deleteTodoError(error))
    }
}
