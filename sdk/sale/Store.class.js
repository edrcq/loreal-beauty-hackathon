class Sale {
	constructor({ id, storeCode, eanCode, customerCode, salesDate, salesQuantity, country, brand } = {}) {
		this.id = id
		this.storeCode = storeCode || ""
		this.eanCode = eanCode || ""
		this.customerCode = customerCode || ""
		this.salesDate = new Date(salesDate) || new Date()
		this.salesQuantity = parseInt(salesQuantity) || 0
	}
}

module.exports = Sale
