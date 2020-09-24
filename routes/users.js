var express = require('express');
var router = express.Router();

const User = require("../Modelos/user");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/registro', function(req, res, next) {
  res.render("login", { title: "Registro" });

});

router.post('/registro', function(req, res, next) {
  console.log(req.body);
let message = '';

    User.create(req.body).then(res => {

    message = 'Usuario registrado';

    res.render("login", { title: "Registro", message });
  }).catch(err => message = err );
  
  res.render("login", { title: "Registro", message });
});

module.exports = router;

