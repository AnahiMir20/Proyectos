const presupuestosModel = require('../model/presupuestosModel')



module.exports.insert = async (presupuesto) => {
    let response = new presupuestosModel();
    let result = await response.insert(presupuesto)
    return result;
}

module.exports.insertFlujo = async (flujo) => {
    let response = new presupuestosModel();
    let result = await response.insertFlujo(flujo)
    return result;
}
module.exports.insertIngreso = async (ingreso) => {
    let response = new presupuestosModel();
    let result = await response.insertIngreso(ingreso)
    return result;
}

module.exports.insertCosto = async (costo) => {
    let response = new presupuestosModel();
    let result = await response.insertCosto(costo)
    return result;
}
module.exports.insertGasto = async (gasto) => {
    let response = new presupuestosModel();
    let result = await response.insertGasto(gasto)
    return result;
}
module.exports.insertRecurso = async (recurso) => {
    let response = new presupuestosModel();
    let result = await response.insertRecurso(recurso)
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