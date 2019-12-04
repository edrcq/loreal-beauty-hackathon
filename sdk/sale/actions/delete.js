const { http } = require('../../core')

async function update(sale) {
	try {
		await http.delete(`/Sale/${sale.id}`)
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
