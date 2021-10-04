const sequelize = require('../db/conexion')

module.exports = class presupuestosModel {
    constructor(presupuesto) {
        this.presupuesto = presupuesto
    }

    async insert(presupuesto) {
        let result = await sequelize.query("INSERT INTO presupuestos (creacion,proyecto,[version]) VALUES ('" + presupuesto.date + "','" + presupuesto.proyecto + "', " + presupuesto.version + ")");
        console.log(result);
        if (result[0].length == 0) {
            let result = await sequelize.query("SELECT idPresupuesto,creacion,proyecto,[version] FROM presupuestos  WHERE creacion ='" + presupuesto.date + "' AND proyecto ='" + presupuesto.proyecto + "' AND [version] = " + presupuesto.version );
            return result
        }
        else {
            return false
        }
    }

}


