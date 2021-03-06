const { http } = require('../../core')

async function update(customer) {
	try {
		await http.put(`/Customer/${customer.code}`, customer)
		return true
	}
	catch (err) {
		if (!err.response) {
			console.error(err)
		}
		throw err
	}
}

module.exports = update
