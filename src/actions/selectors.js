export const getTodo = state => state.todos;
export const getFetchTodos = state => state.todos.isLoading;
export const getFailedLoad = state => state.todos.canLoad;
