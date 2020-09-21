const mongoose = require("mongoose");

module.exports = {
  connect: () => {
    return mongoose.connect(`mongodb://localhost:27017/todox`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  },
  connection: () => {
    if (mongoose.connection) return mongoose.connection;

    return this.connect();
  },
};