import {
    LOAD_TODOS_START,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,

    ADD_TODO_START,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE
} from '../actions/actionTypes';

const initialState = {
    isLoading: false,
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
        console.log('load', action);
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

        case ADD_TODO_START:
            return {
                ...state,
                isLoading: true
            }

        case ADD_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: state.todos.concat(action.payload)
            }

        case ADD_TODO_FAILURE:
            return {
                ...state,
                error: action.payload.message
            }
        default:
            return state
    }
}
