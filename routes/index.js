var express = require('express');
var router = express.Router();

/* GET home page. */

var checkUser = function(req, res, next) {
  if (req.session.loggedIn) {
    next();
  } else {
   res.redirect("/users/registro");
  }
};


router.get('/', checkUser , function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
