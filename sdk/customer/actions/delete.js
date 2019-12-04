const { http } = require('../../core')

async function update(customer) {
	try {
		await http.delete(`/Customer/${customer.code}`)
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
