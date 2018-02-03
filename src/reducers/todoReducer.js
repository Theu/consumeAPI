import * as types from '../actions/actionTypes';

export default function todoReducer(state = {isLoading: false, canLoad:true, todos: []}, action) {
    switch (action.type) {
        case types.LOAD_TODOS_START:
            return {
                ...state,
                isLoading: true,
                canLoad: true
            };

        case types.LOAD_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.todos.data
            };

        case types.LOAD_TODOS_ERROR:
            return {
                ...state,
                isLoading: false,
                canLoad: false
            }

        case types.ADD_TODO:
            return {
                ...state,
                isLoading: false
            };

        case types.DELETE_TODO:
            return {
                ...state,
                isLoading: false
            }

        default:
            return state;
    }
}
