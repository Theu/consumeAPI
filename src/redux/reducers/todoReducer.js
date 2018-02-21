import {
    LOAD_TODOS_START,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE
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

        default:
            return state
    }
}
