var express = require("express");
var router = express.Router();
var mainController = require("../controllers/mainController");

/* GET home page. */
router.get("/", mainController.index);
router.get("/queColorEs", mainController.queColorEs);
router.post("/color", mainController.color);
router.get("/borrar", mainController.borrar);

module.exports = router;
