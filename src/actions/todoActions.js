import * as types from './actionTypes';
const baseURL = require('../tools/axiosBaseURL');

// reducer to indicate the API call started
//::: THIS IS AN ACTION CREATOR
export function todoSearch() {
    return {
        type: types.START_FETCHING
    }
}

//reducer to indicate we received ALL DATA
//::: THIS IS AN ACTION CREATOR
export function loadTodoSuccess(todos) {
    return {
        type: types.LOAD_TODOS_SUCCESS,
        todos: Object.entries(todos.data.rows)
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



export function selectorGetTodo(state) {
    return state.todos;
}

export function selectorIsFetching(state) {
    return state.isFetching;
}
