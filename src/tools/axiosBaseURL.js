const axios = require('axios');

export const url = '/todos';
export const baseURL = axios.create({baseURL: 'http://localhost:3000'});
