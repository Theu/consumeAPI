import {
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_ERROR,
    ADD_TODO,
    DELETE_TODO
} from '../actions/actionTypes';

const initialState = {
    response: '200',
    isLoading: false,
    todos:[],
    title:''
}

export default function todoReducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.todos.data
            }
        case LOAD_TODOS_ERROR:
            return {
                ...state,
                response: action.response
            }
        case ADD_TODO:
            return {
                ...state,
                response: '201',
                todos: state.todos.concat(action.todo.title),
                title: action.todo.title
            }
        default:
            return state
    }
}
