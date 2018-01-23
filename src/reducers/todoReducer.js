import * as types from '../actions/actionTypes';

export default function todoReducer(state = {isFetching: false, todos: []}, action) {
    switch (action.type) {
        case types.LOAD_TODOS_START:
            return {
                ...state,
                isFetching: true,
            };

        case types.LOAD_TODOS_SUCCESS:
        return {
            ...state,
            isFetching: true,
            todos: action.todos
        };

        case types.ADD_TODO:
        return {
            ...state,
            todos: action.todo
        };

        default:
            return state;
    }
}
