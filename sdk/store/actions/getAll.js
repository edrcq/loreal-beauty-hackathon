const Store = require('../Store.class')
const { http } = require('../../core')

async function getAll() {
	const stores = []
	try {
		const { data } = await http.get('/Store')
		const len = data.length
		for (let i = 0; i < len; i++) {
			stores.push(new Store(data[i]))
		}
		return stores
	}
	catch (err) {
		if (!err.response) {
			console.error(err)
		}
		throw err
	}
}

module.exports = getAll
