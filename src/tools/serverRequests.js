const axios = require('axios');

const url = '/todos';
export const axiosInstance = axios.create({baseURL: 'http://localhost:3000'});


export function consumeApi(axios) {
    return {
        getTodosFromServer: () => axios.get(url)
    }
}
