const fs = require("fs");
const path = require("path");

// const cuentasFilePath = path.join(__dirname, "../data/cuentasDataBase.json");
// const cuentas = JSON.parse(fs.readFileSync(cuentasFilePath, "utf-8"));

const controller = {
    index: (req, res) => {
        res.render("cuentas/cuentas");
    },
    upload: (req, res) => {
        res.render("results");
    },
};

module.exports = controller;