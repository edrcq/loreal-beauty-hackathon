const { http } = require('../../core')

async function update(store) {
	try {
		await http.put(`/Store/${store.code}`, store)
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
