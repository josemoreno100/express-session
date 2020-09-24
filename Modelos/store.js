const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  idUser: String,
  name: String,
  url: String,
  publicId: String
});

const userModel = mongoose.model("Store", storeSchema);

module.exports = userModel;