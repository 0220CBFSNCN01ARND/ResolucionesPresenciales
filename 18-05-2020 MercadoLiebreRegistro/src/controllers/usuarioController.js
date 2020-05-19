const fs = require("fs");
const path = require("path");

// const cuentasFilePath = path.join(__dirname, "../data/cuentasDataBase.json");
// const cuentas = JSON.parse(fs.readFileSync(cuentasFilePath, "utf-8"));

const controller = {
    perfil: (req, res) => {
        res.render("usuarios/usuarios");
    },
};

module.exports = controller;