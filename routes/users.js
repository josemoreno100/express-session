var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;


const User = require("../Modelos/user");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/registro', function (req, res, next) {
  res.render("login", { title: "Registro" });

});

router.post('/registro', function (req, res, next) {

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
  }).catch(err => message = err);

  res.render("login", { title: "Registro", message });
});

module.exports = router;

// Validar usuario en la BD

router.get('/validation', function (req, res, next) {
  res.render("validation", { title: "Validación" });

});
router.post('/validation', function (req, res, next) {

  let usuario = {
    email: req.body.email,
    password: req.body.password
  };
  User.findOne({ email: usuario.email }, (err, usuarioExiste) => {
    if (usuarioExiste) {

      // Load hash from your password DB.
      let passValidacion = bcrypt.compareSync(usuario.password, usuarioExiste.password); // true

      req.session.reload(function (err) {
        // session updated
      })
      if (passValidacion) {
        console.log(passValidacion);
       /*  router.get('/store', function (req, res, next) {
          res.render("store", { title: "Registro Tienda" });
        
        }); */
        
        
      }
      else {
        
        res.render("validation", { title: "Chequear contraseña"});
      }
    }

    else {
      res.render("validation", { title: "Chequear usuario" });
    };

  })
});



