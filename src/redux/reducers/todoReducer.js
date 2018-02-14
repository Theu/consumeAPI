import {
    LOAD_TODOS_START,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_ERROR,

    ADD_TODO_START,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,

    DELETE_TODO
} from '../actions/actionTypes';

const initialState = {
    errorMessage: '', // change response to error
    isLoading: false,
    todos:[],
    isPending: false,
    errorType: ''
}

export default function todoReducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_TODOS_START:
            return {
                ...state,
                isLoading: true
            }
        case LOAD_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.todos.data,
                isPending: false
            }
        case LOAD_TODOS_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.error.message
            }

        case ADD_TODO_START:
            return {
                ...state,
                isPending: true,
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: state.todos.concat(action.todo),
                isPending: true,
            }
        case ADD_TODO_ERROR:
            console.log('ADD_TODO_ERROR', action);
            return {
                ...state,
                errorMessage: action.error.message,
                errorType: action.type
            }

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        default:
            return state
    }
}
