class Product {
	constructor({ eanCode, productName, signatureName, brandName, subBrandName, axisName, subAxisName } = {}) {
		this.eanCode = eanCode || ""
		this.productName = productName || ""
		this.signatureName = signatureName || ""
		this.brandName = brandName || ""
		this.subBrandName = subBrandName || ""
		this.axisName = axisName || ""
		this.subAxisName = subAxisName || ""
	}
}

module.exports = Product
