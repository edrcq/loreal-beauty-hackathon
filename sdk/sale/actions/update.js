const { http } = require('../../core')

async function update(sale) {
	try {
		await http.put(`/Sale/${sale.id}`, sale)
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
