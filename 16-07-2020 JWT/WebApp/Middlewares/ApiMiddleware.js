const express = require("express");
const jwt = require("jsonwebtoken");
//Necesitamos nuestra super clave secreta
const clave = require("../VariablesGlobales/variablesglobales");

const rutaProtegida = express.Router();
rutaProtegida.use((req, res, next) => {
    const token = req.headers["token"];

    if (token) {
        jwt.verify(token, clave, (err, decoded) => {
            if (err) {
                res.json({ message: "Este token no esta activo" });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.send({ message: "Este token no esta activo" });
    }
});

module.exports = rutaProtegida;