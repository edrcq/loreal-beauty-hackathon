class Customer {
	constructor({ code, firstName, lastName, gender, ageGroup, postalCode, city, country } = {}) {
		this.code = code || ""
		this.firstName = firstName || ""
		this.lastName = lastName || ""
		this.gender = gender || ""
		this.ageGroup = ageGroup || ""
		this.postalCode = postalCode || ""
		this.city = city || ""
		this.country = country || ""
	}
}

module.exports = Customer
