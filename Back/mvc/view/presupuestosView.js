const presupuestosController = require('../controller/presupuestosController')
const validation = require('../middleware/validation')
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")



module.exports = async (app) => {

    app.post('/presupuestos/insert', autentication.userAutentication, async (req, res) => {
        let presupuesto = req.body;
        res.send(await presupuestosController.insert(presupuesto));
    });

    app.post('/login/update', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        const login = req.body;
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await loginController.updateLogin(user.data, login));
    });

};