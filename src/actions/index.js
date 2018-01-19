import axios from 'axios';
const baseURL = require('../tools/axiosBaseURL');
export const END_FETCHING = 'END_FETCHING';
export const START_FETCHING = 'START_FETCHING';

// reducer to indicate the API call started
//::: THIS IS AN ACTION CREATOR
export const todoSearch = () => {
    return {
        type: START_FETCHING
    }
}

//reducer to indicate we received ALL DATA
//::: THIS IS AN ACTION CREATOR
export function endTodoSearch(request) {
    console.log('richiesta', request.data);
    return {
        type: END_FETCHING,
        todos: Object.entries(request.data.rows)
    }
}

// perform the fetching
//::: THIS IS AN ACTION
export const fetchTodo = () => (dispatch) => {
    const url = '/todos'
    dispatch(todoSearch())
    return baseURL.get(url).then(
        (res) => {
            console.log('MAGIC', res.data);
            const todoList = res;
            dispatch(endTodoSearch(todoList))
        }
    ).catch((error) => {console.log(error)})
}

export function selectorGetTodo(state) {
    return state.todos;
}

export function selectorIsFetching(state) {
    return state.isFetching;
}
