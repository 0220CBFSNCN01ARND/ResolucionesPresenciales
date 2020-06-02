var express = require('express');
var router = express.Router();
const cookie = require('cookie-parser')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('El valor de la cookie NombreUsuario es:' + req.cookies.NombreUsuario);
});


module.exports = router;
