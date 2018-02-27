import {
    LOAD_TODOS_START,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,
    DELETE_TODO_START,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_FAILURE
} from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    isDeleting: false,
    todos:[],
    error: []
}

export const todoReducer = (state = initialState, action) => {
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
                todos: action.payload
            }

        case LOAD_TODOS_FAILURE:
            return {
                ...state,
                error: action.payload.message
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
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }

        case DELETE_TODO_FAILURE:
            return {
                ...state,
                isDeleting: false,
                error: action.payload.message
            }

        default:
            return state
    }
}
