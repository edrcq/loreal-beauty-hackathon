class Store {
	constructor({ code, name, street, postalCode, city, country, brand } = {}) {
		this.id = code || ""
		this.code = code || ""
		this.name = name || ""
		this.street = street || ""
		this.postalCode = postalCode || ""
		this.city = city || ""
		this.country = country || ""
		this.brand = brand || ""
	}
}

module.exports = Store
