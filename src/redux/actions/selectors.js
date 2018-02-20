
export const isLoading = state => state.isLoading;
export const getTodos = state => state.todos;

export const isError = state => state.error.length > 0;
export const getErrorType = state => state.error;
