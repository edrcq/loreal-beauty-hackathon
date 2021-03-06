const Customer = require('../Customer.class')
const { http } = require('../../core')

async function getAll() {
	const customers = []
	try {
		const { data } = await http.get('/Customer')
		const len = data.length
		for (let i = 0; i < len; i++) {
			customers.push(new Customer(data[i]))
		}
		return customers
	}
	catch (err) {
		if (!err.response) {
			console.error(err)
		}
		throw err
	}
}

module.exports = getAll
