const { http } = require('../../core')

async function update(product) {
	try {
		await http.put(`/Product/${product.eanCode}`, product)
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
