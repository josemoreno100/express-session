var express = require('express');
var router = express.Router();
/*Preparamos para el encriptado*/
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var userdb = require('userdb');

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true })) 

var BCRYPT_SALT_ROUNDS = 12;

const User = require("../Modelos/user");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/registro', function(req, res, next) {
  res.render("login", { title: "Registro" });
/* comienza encriptado*/
var username = req.body.username;
  var password = req.body.password;

  bcrypt.hash(password, BCRYPT_SALT_ROUNDS)
    .then(function(hashedPassword) {
        return usersDB.saveUser(username, hashedPassword);
      })
      .then(function() {
          res.send();
      })
      .catch(function(error){
          console.log("Error saving user: ");
          console.log(error);
          next();
      });

});


router.post('/registro', function(req, res, next) {
  console.log(req.body);
  let message = '';
  User.create(req.body).then(response => {

    message = 'Usuario registrado';

    res.render("login", { title: "Registro", message });
  }).catch(err => message = err );
  
  res.render("login", { title: "Registro", message });
});

module.exports = router;

