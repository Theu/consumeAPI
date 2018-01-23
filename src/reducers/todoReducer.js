import * as types from '../actions/actionTypes';

export default function todoReducer(state = {isFetching: false, todos: []}, action) {
    switch (action.type) {
        case types.LOAD_TODOS_SUCCESS:
            return {
                isFetching: true,
                todos: action.todos
            };

        case types.START_FETCHING:
            return {
                isFetching: true,
            };

        case types.ADD_TODO:
        console.log('DONE', action.todo);
            return {
                ...state,
                todos: action.todo.title
            };

        default:
            return state;
    }
}
