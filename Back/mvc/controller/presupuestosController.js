const presupuestosModel = require('../model/presupuestosModel')



module.exports.insert = async (presupuesto) => {
    let response = new presupuestosModel();
    let result = await response.insert(presupuesto)
    return result;
}

module.exports.updateProduct = async (product) => {
    let response = new productsModel();
    let result = await response.update(product)
    return result;
}

module.exports.deleteProduct = async (productName) => {
    let response = new productsModel();
    let result = await response.delete(productName)
    return result;
}