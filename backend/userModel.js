const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    data: Buffer,
    contentType: String
  },
  role: {
    type: String,
    default: 'user'
  }
});

module.exports = userSchema;
