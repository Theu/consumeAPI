import {
    LOAD_TODOS_START,
    LOAD_TODOS,
    LOAD_TODOS_ERROR
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

        case LOAD_TODOS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }
        
        case LOAD_TODOS_ERROR:
            return {
                ...state,
                error: [action.payload.message, action.payload.response]
            }

        default:
            return state
    }
}
