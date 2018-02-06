import * as types from '../actions/actionTypes';

export default function todoReducer(state = {isLoading: false, todos: []}, action) {
    switch (action.type) {
        case types.LOAD_TODOS_START:
            return {
                ...state,
                isLoading: true
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
                isLoading: false
            }

        case types.ADD_TODO:
        console.log('02');
            return {
                ...state,
                todos: state.todos.concat(action.todo.title)
            };

        case types.DELETE_TODO:
            console.log(action);
            return {
                ...state,
                todos: state.todos.filter(action.todo.id)
            }

        default:
            return state;
    }
}
