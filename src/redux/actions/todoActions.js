import {
    loadTodoStart,
    loadTodoSuccess,
    loadTodoError,

    addTodoStart,
    addTodoSuccess,
    addTodoError,

    deleteTodo
} from './actionsCreators';

import {
    url,
    baseURL // remeber to change this axiosIstance?
} from '../../tools/axiosBaseURL';

const getFromServer = () => baseURL.get(url); //rem to change to a function const getFromServer = (url) => baseURL.get(url)
const GENERIC_NETWORK_ERROR = 'GENERIC_NETWORK_ERROR';

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
            dispatch(loadTodoSuccess(await getFromServer()))
        } catch(error) {
            dispatch(todo_load_error(error))
        }
    }
}

export function todo_load_error(error) {
    return async dispatch => {
        dispatch(loadTodoError(error))
    }
}

/// TODO_ADD

const postTodo = (todoTitle) => baseURL.post('url', todoTitle)

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
    return async dispatch => {
        dispatch(addTodoError(error))
    }
}




export function todo_add_success(todoTitle) {
    return async dispatch => {
        try {
            dispatch(addTodoSuccess(todoTitle))
            dispatch(todo_load())
        } catch(error) {
            dispatch(todo_add_error(error))
        }
    }
}


/// TODO_DELETE
export function todo_delete(todoId) {
    return async dispatch => {
        try {
            dispatch(deleteTodo(todoId)) //more for personal learning. the real add_toServer is at next line
            const removeTodo = await baseURL.delete(`todos/${todoId}`)
            if(removeTodo.statusText === 'No Content') {
                dispatch(loadTodoSuccess(await baseURL.get(url)))
            }
        } catch(error) {
            (!error.response) ?
                dispatch(loadTodoError(GENERIC_NETWORK_ERROR))
            :
                dispatch(loadTodoError(error.response.status))
        }
    }
}
