export const todosReducer = (state = {isFetching: false, todos: []}, action) => {
    switch(action.type) {
        case 'START_FETCHING':
            return {
                isFetching: true
            }
        break;

        case 'END_FETCHING':
            return {
                isFetching: false,
                todos: action.todos
            }
        break;

        default:
            return state;
    }
}
