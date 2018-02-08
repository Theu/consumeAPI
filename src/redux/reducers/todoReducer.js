import {
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_ERROR,
    ADD_TODO,
    ADD_TODO_SUCCESS,
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
                todos: state.todos.concat(action.todo.title)
            }
        case ADD_TODO_SUCCESS:
        console.log('action', action);
            return {
                ...state,
                isLoading: false,
                todos: action.todos.data
            }
        default:
            return state
    }
}
