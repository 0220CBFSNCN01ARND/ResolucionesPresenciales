// ************ Require's ************
const express = require("express");
const upload = require("../MisFunciones/HelpMulter"); //TODO: Probar que funcione con o sul en multer
const router = express.Router();

// ************ Controller Require ************
const cuentasController = require("../controllers/cuentasController");

router.get("/registro", cuentasController.index); /* GET - search results */
router.post(
    "/registro",
    upload.any(),
    cuentasController.upload
); /* POST - New register */

module.exports = router;