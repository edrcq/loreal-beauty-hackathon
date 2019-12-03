const Customer = require('./Customer.class')
const create = require('./actions/create')
const deleteOne = require('./actions/delete')
const getAll = require('./actions/getAll')
const update = require('./actions/update')

module.exports.create = create
module.exports.deleteOne = deleteOne
module.exports.getAll = getAll
module.exports.update = update
module.exports.Customer = Customer
