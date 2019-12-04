const axios = require('axios')


const instance = axios.create({
	baseURL: 'http://apim-dev-hackathon-03.azure-api.net/api/api',
	timeout: 3000,
	headers: {
		'Ocp-Apim-Subscription-Key': '88a43e08b7304ced835e47c9ce9485b0'
	}
});

instance.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        if (error.response) {
            console.error(error.response.status, error.response.config.method, error.response.config.url, error.response.data)
        }
        return Promise.reject(error);
    }
);

module.exports = instance
