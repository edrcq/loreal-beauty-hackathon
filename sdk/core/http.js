const axios = require('axios')

const { API_KEY } = process.env

const instance = axios.create({
	baseURL: 'https://apim-dev-hackathon-03.azure-api.net/api/api',
	timeout: 3000,
	headers: {
		'Ocp-Apim-Subscription-Key': API_KEY
	}
});

module.exports = instance
