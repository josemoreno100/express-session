var express = require("express");
var router = express.Router();
const Store = require("../Modelos/store");

/* GET Store page. */
router.get("/store", function(req, res, next) {
  res.render("store", {
    title: "Store listing"  });
});

module.exports = router;


router.post('/registro', function(req, res, next) {
  console.log(req.body);
let message = '';
    User.create(req.body).then(res => {

    message = 'Tienda registrada';

    res.render("store", { title: "Registro de tienda", message });
  }).catch(err => message = err );
  
  res.render("store", { title: "Registro de tienda", message });
});

module.exports = router;