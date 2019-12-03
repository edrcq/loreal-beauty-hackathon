const axios = require('axios')

const { API_KEY } = process.env

const instance = axios.create({
	baseURL: 'https://apim-dev-hackathon-03.azure-api.net/api/api',
	timeout: 3000,
	headers: {
		'Ocp-Apim-Subscription-Key': API_KEY
	}
});

instance.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.error(error.response.status, error.response.config.method, error.response.config.url, error.response.data)
        return Promise.reject(error);
    }
);

module.exports = instance
