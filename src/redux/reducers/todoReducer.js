import {
    LOAD_TODOS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_ERROR
} from '../actions/actionTypes';

const initialState = {
    isError: false,
    isLoading: false,
    todos:[],
    error: []
}

export default function todoReducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_TODOS:
            console.log("REDUCER", action);
            return {
                ...state,
                todos: action.payload
            }

        default:
            return state
    }
}
