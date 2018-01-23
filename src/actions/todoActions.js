import * as types from './actionTypes';
const baseURL = require('../tools/axiosBaseURL');

// reducer to indicate the API call started
//::: THIS IS AN ACTION CREATOR
export function todoSearch() {
    return {
        type: types.LOAD_TODOS_START
    }
}

//reducer to indicate we received ALL DATA
//::: THIS IS AN ACTION CREATOR
export function loadTodoSuccess(todos) {
    return {
        type: types.LOAD_TODOS_SUCCESS,
        todos: todos.data.rows
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
        return baseURL.post(url, todo).then((newTodo) => {
            console.log('one problem at time', todo);
            dispatch(addTodo(todo))
            }
        ).catch((error) => {console.log(error)})
    }
}

// perform the fetching
//::: THIS IS AN ACTION
export function loadTodos() {
    return function(dispatch) {
        const url = '/todos';
        return baseURL.get(url).then((todos) => {
            dispatch(loadTodoSuccess(todos))
            }
        ).catch((error) => {console.log(error)})
    }
}



export const selectorGetTodo = state => state.todos

export const selectorIsFetching = state => state.todos.isFetching;
