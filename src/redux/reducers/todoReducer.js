import {
    LOAD_TODOS_START,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_ERROR,

    ADD_TODO_START,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,

    DELETE_TODO_START,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_ERROR
} from '../actions/actionTypes';

const initialState = {
    isError: false,
    errorMessage: '',
    errorType: '',
    isLoading: false,
    todos:[],
    isPending: false,
    isDeleting: false
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
                errorMessage: action.error.message,
                errorType: action.type
            }

        case ADD_TODO_START:
            return {
                ...state,
                errorType: '',
                isError: false,
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
            return {
                ...state,
                isError: true,
                errorMessage: action.error.message,
                errorType: action.type,
                isPending: false
            }

        case DELETE_TODO_START:
            return {
                ...state,
                isDeleting: true
            }
        case DELETE_TODO_SUCCESS:
            return {
                ...state,
                isDeleting: false,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case DELETE_TODO_ERROR:
            return {
                ...state,
                isError: true,
                errorMessage: action.error.message,
                errorType: action.type,
                isDeleting: false
            }
        default:
            return state
    }
}
