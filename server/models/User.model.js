const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  token: String,
  name: String,
  email: String,
  googleId: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;
