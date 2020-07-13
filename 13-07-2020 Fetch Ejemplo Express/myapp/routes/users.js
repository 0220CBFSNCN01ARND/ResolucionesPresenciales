var express = require("express");
var router = express.Router();

var dbemails = [
    "admin@gmail.com",
    "super@gmail.com",
    "batman@gmail.com",
    "lalala@gmail.com",
    "natalianatalia@gmail.com",
];

/* GET users listing. */
router.get("/", function(req, res, next) {
    res.send("respond with a resource");
});

//Endpoint
router.get("/getemails/:emailparavalidar", function(req, res, next) {
    res.json({
        esvalido: dbemails.includes(req.params.emailparavalidar),
    });
});

module.exports = router;