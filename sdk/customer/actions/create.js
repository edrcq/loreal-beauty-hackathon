const Customer = require('../Customer.class')
const { http } = require('../../core')

async function create(customer) {
	const customers = []
	try {
		const { data } = await http.post('/Customer', customer)
		return new Customer(data)
	}
	catch (err) {
		if (!err.response) {
			console.error(err)
		}
		return customers
	}
}

module.exports = create
