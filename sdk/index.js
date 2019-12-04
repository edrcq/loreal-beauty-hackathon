require('dotenv').config()

const customers = {
	getAll: require('./customer/actions/getAll'),
	create: require('./customer/actions/create'),
	deleteOne: require('./customer/actions/delete'),
	update: require('./customer/actions/update')
}

const stores = {
	getAll: require('./store/actions/getAll'),
	create: require('./store/actions/create'),
	deleteOne: require('./store/actions/delete'),
	update: require('./store/actions/update')
}

const products = {
	getAll: require('./product/actions/getAll'),
	create: require('./product/actions/create'),
	deleteOne: require('./product/actions/delete'),
	update: require('./product/actions/update')
}

const sales = {
	getAll: require('./sale/actions/getAll'),
	create: require('./sale/actions/create'),
	deleteOne: require('./sale/actions/delete'),
	update: require('./sale/actions/update')
}

module.exports.sales = sales
module.exports.products = products
module.exports.stores = stores
module.exports.customers = customers

