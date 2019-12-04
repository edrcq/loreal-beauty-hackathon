const Sale = require('../Sale.class')
const { http } = require('../../core')

async function create(sale) {
	try {
		const { data } = await http.post('/Sale', sale)
		return new Sale(data)
	}
	catch (err) {
		if (!err.response) {
			console.error(err)
		}
		throw err
	}
}

module.exports = create
