// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const usuarioController = require("../controllers/usuarioController");

router.get("/perfil", usuarioController.perfil); /* GET - search results */

module.exports = router;