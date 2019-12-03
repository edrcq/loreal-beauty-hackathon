const Product = require('../Product.class')
const { http } = require('../../core')

async function create(product) {
	try {
		const { data } = await http.post('/Product', product)
		return new Product(data)
	}
	catch (err) {
		if (!err.response) {
			console.error(err)
		}
		throw err
	}
}

module.exports = create
