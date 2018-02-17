const axios = require('axios');

export const url = '/todos';
export const axiosInstance = axios.create({baseURL: 'http://localhost:3000'});


export function consumeApi(axios) {
    return {
        getTodoFromServer: () => axios.get(url),
        postTodo: (todoTitle) => axios.post(url, todoTitle),
        removeTodo: (todoId) => axiosInstance.delete(`todos/${todoId}`)
    }
}
