const Product = require('../Product.class')
const { http } = require('../../core')

async function getAll() {
	const products = []
	try {
		const { data } = await http.get('/Product')
		const len = data.length
		for (let i = 0; i < len; i++) {
			products.push(new Product(data[i]))
		}
		return products
	}
	catch (err) {
		if (!err.response) {
			console.error(err)
		}
		throw err
	}
}

module.exports = getAll
