const presupuestosController = require('../controller/presupuestosController')
const validation = require('../middleware/validation')
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")



module.exports = async (app) => {

    app.post('/presupuestos/insert', autentication.userAutentication, async (req, res) => {
        let presupuesto = req.body;
        res.send(await presupuestosController.insert(presupuesto));
    });
    app.post('/presupuestos/insertFlujo', autentication.userAutentication, async (req, res) => {
        let flujo = req.body;
        res.send(await presupuestosController.insertFlujo(flujo));
    });
    app.post('/presupuestos/insertIngreso', autentication.userAutentication, async (req, res) => {
        let ingreso = req.body;
        res.send(await presupuestosController.insertIngreso(ingreso));
    });
    app.post('/presupuestos/insertCosto', autentication.userAutentication, async (req, res) => {
        let costo = req.body;
        res.send(await presupuestosController.insertCosto(costo));
    });
    app.post('/presupuestos/insertGasto', autentication.userAutentication, async (req, res) => {
        let gasto = req.body;
        res.send(await presupuestosController.insertGasto(gasto));
    });
    app.post('/presupuestos/insertRecurso', autentication.userAutentication, async (req, res) => {
        let recurso = req.body;
        res.send(await presupuestosController.insertRecurso(recurso));
    });

    app.post('/login/update', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        const login = req.body;
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await loginController.updateLogin(user.data, login));
    });
    
    app.post('/login/update', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        const login = req.body;
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await loginController.updateLogin(user.data, login));
    });

};