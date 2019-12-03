const Customer = require('../Customer.class')
const { http } = require('../../core')

async function create(customer) {
	try {
		const { data } = await http.post('/Customer', customer)
		return new Customer(data)
	}
	catch (err) {
		if (!err.response) {
			console.error(err)
		}
		throw err
	}
}

module.exports = create
