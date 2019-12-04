const Store = require('../Store.class')
const { http } = require('../../core')

async function create(store) {
	try {
		const { data } = await http.post('/Store', store)
		return new Store(data)
	}
	catch (err) {
		if (!err.response) {
			console.error(err)
		}
		throw err
	}
}

module.exports = create
