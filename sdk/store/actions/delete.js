const { http } = require('../../core')

async function update(store) {
	try {
		await http.delete(`/Store/${store.code}`)
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
