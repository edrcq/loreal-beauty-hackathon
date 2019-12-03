const { http } = require('../../core')

async function update(customer) {
	const customers = []
	try {
		await http.put(`/Customer/${customer.id}`, customer)
		return true
	}
	catch (err) {
		if (!err.response) {
			console.error(err)
		}
		return customers
	}
}

module.exports = update
