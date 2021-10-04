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
    async insertFlujo(flujo) {
        let result = await sequelize.query("INSERT INTO flujoEfectivo (idPresupuesto,mes,ingreso) VALUES (" + flujo.idPresupuesto + "," + flujo.mes + ", " + flujo.ingreso + ")");
        console.log(result);
        if (result[0].length == 0) {
            return result
        }
        else {
            return false
        }
    }
    async insertIngreso(ingreso) {
        let result = await sequelize.query("INSERT INTO ingresos (idPresupuesto,concepto,mes,ingreso) VALUES (" + ingreso.idPresupuesto + ",'" + ingreso.concepto + "', " + ingreso.mes + "," +ingreso.ingreso +")");
        console.log(result);
        if (result[0].length == 0) {
            return result
        }
        else {
            return false
        }
    }

    async insertCosto(costo) {
        let result = await sequelize.query("INSERT INTO costosDirectos (idPresupuesto,concepto,mes,costo) VALUES (" + costo.idPresupuesto + ",'" + costo.concepto + "', " + costo.mes + "," +costo.costo +")");
        console.log(result);
        if (result[0].length == 0) {
            return result
        }
        else {
            return false
        }
    }

}


// idFlujo INT NOT NULL IDENTITY (1,1),
// idPresupuesto INT NOT NULL,
// mes INT NOT NULL,
// ingreso FLOAT NOT NULL,
// PRIMARY KEY (idFlujo),
// FOREIGN KEY(idPresupuesto) REFERENCES presupuestos(idPresupuesto)]