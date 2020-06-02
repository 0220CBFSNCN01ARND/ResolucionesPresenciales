var express = require('express');
var router = express.Router();
const session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/session/:nombre', function(req, res, next) {
    
  req.session.nombreUsuario = req.params.nombre

  res.json(req.session)
});


module.exports = router;
