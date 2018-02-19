const axios = require('axios');

const url = '/todos';
export const axiosInstance = axios.create({baseURL: 'http://localhost:3000'});


export function consumeApi(axios) {
    return {
        getTodoFromServer: () => axios.get(url),
        postTodo: (todoTitle) => axios.post(url, todoTitle),
        removeTodo: (todoId) => axios.delete(`todos/${todoId}`)
    }
}
