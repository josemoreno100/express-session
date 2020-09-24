const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  isActive: Boolean
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;


userSchema.pre('save', function(next){
  const user = this;
  if (!user.isModified('password')){
    return next ();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      nest(err);
    }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        next (err);
      }
      user.password = hash; 
      next(); 
    }) 
  })
})