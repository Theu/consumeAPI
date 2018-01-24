import * as types from './actionTypes';
const baseURL = require('../tools/axiosBaseURL');

export function loadTodoStart() {
    return {
        type: types.LOAD_TODOS_START
    }
}
export function startLoad() {
    return function(dispatch) {
        dispatch(loadTodoStart())
    }
}

//reducer to indicate we received ALL DATA
//::: THIS IS AN ACTION CREATOR
export function loadTodoSuccess(todos) {
    return {
        type: types.LOAD_TODOS_SUCCESS,
        todos: todos.data
    }
}

export function loadTodoFailed() {
    return {
        type: types.LOAD_TODOS_ERROR
    }
}

// perform the fetching
//::: THIS IS AN ACTION
export function loadTodos() {
    return function(dispatch) {
        const url = '/todos';
        return baseURL.get(url)
            .then((todos) => {
                dispatch(loadTodoSuccess(todos))
                }
            )
            .catch(error => {
                dispatch(loadTodoFailed())
            })
    }
}


//::action creator for ADD_TODO
export function addTodo(todo) {
    return {
        type: types.ADD_TODO,
        todo
    }
}
export function storeNewTodo(todo) {
    return function(dispatch) {
        const url = '/todos';
        console.log(todo);
        return baseURL.post(url, todo)
            .then(() => {
                dispatch(addTodo(todo))
                }
            )
            .then((todos) => {
                dispatch(loadTodoSuccess(todos))
                }
            )
            .catch((error) => {console.log(error)})
    }
}




export const selectorGetTodo = state => state.todos
export const selectorIsFetching = state => state.todos.isLoading;
export const selectorFailedLoad = state => state.todos.canLoad;
