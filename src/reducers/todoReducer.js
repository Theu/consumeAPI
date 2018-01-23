import * as types from '../actions/actionTypes';

export default function todoReducer(state = {isLoading: false, hasLoaded:false, todos: []}, action) {
    switch (action.type) {
        case types.LOAD_TODOS_START:
            return {
                ...state,
                isLoading: true,
            };

        case types.LOAD_TODOS_SUCCESS:
            return {
                ...state,
                hasLoaded: true,
                todos: action.todos
            };

        case types.LOAD_TODOS_ERROR:
            return {
                ...state,
                isLoading: false,
                hasLoaded: false
            }

        case types.ADD_TODO:
            return {
                ...state,
                todos: action.todo
            };

        default:
            return state;
    }
}
