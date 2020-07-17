var express = require("express");
var router = express.Router();
//llamo la libreria jsonwebtoken
const jwt = require("jsonwebtoken");
//Necesitamos nuestra super clave secreta
const clave = require("../VariablesGlobales/variablesglobales");

/* GET users listing. */
router.get("/", function(req, res, next) {
    res.send("respond with a resource");
});

router.get("/getToken", function(req, res, next) {
    const token = jwt.sign({ nombre: "harold" }, clave);
    res.json({ token: token });
});

module.exports = router;