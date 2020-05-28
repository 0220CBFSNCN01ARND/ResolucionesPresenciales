var express = require('express');
var router = express.Router();
const cookie = require('cookie-parser')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/EnviarUsuario/:name', function(req, res, next) {

  //EJEMPLO: localhost:3000/EnviarUsuario/Minombre
  console.log('Params:' + req.params.name);
  //EJEMPLO: localhost:3000/EnviarUsuario?apellido=MiApellido
  console.log('Query:' + req.query.apellido);

  res
  .cookie('NombreUsuario',req.params.name,{maxAge: 60000})
  .send('respond with a resource');
});

module.exports = router;
