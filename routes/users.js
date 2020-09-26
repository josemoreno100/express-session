var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;


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
  const hash = bcrypt.hashSync(req.body.password, saltRounds);
// Store hash in your password DB.
  let usuario = { 
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hash

};
 console.log(usuario);
 
let message = '';
   
    User.create(usuario).then(res => {

    message = 'Usuario registrado';

    res.render("login", { title: "Registro", message });
  }).catch(err => message = err );
  
  res.render("login", { title: "Registro", message });
});

module.exports = router;

