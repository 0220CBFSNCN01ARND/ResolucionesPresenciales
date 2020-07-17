//Creo mis rutas para el path API de mi site
var express = require("express");
var router = express.Router();

const rutasProtegidas = require("../Middlewares/ApiMiddleware");

//Aplico mi middleware custom (rutasProtegidas)

//Get
router.get("/", rutasProtegidas, function(req, res, next) {
    res.send("Get Api");
});

//Post
router.post("/", rutasProtegidas, function(req, res, next) {
    res.send("Post Api");
});

//Put
router.put("/", rutasProtegidas, function(req, res, next) {
    res.send("Put Api");
});

//Delete
router.delete("/", rutasProtegidas, function(req, res, next) {
    res.send("Delete Api");
});

module.exports = router;