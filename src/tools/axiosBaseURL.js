const axios = require('axios');

const axiosBaseURL = axios.create({baseURL: 'http://localhost:3000'});

module.exports = axiosBaseURL;
