const Sale = require('../Store.class')
const { http } = require('../../core')

async function getAll() {
	const sales = []
	try {
		const { data } = await http.get('/Sale')
		const len = data.length
		for (let i = 0; i < len; i++) {
			sales.push(new Sale(data[i]))
		}
		return sales
	}
	catch (err) {
		if (!err.response) {
			console.error(err)
		}
		throw err
	}
}

module.exports = getAll
