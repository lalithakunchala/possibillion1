var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Create Schema
const User = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user', User);