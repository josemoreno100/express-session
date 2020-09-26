const bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose");
const users = require("../routes/users");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  isActive: Boolean
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;


/* userSchema.pre('create', function(next){
  const usuario = this;
  if (!usuario.isModified('password')){
    return next ();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      next(err);
    }
    bcrypt.hash(usuario.password, salt, null, (err, hash) => {
      if (err) {
        next (err);
      }
      usuario.password = hash; 
      next(); 
    }); 
  });
}); */